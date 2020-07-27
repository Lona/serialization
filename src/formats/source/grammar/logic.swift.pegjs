// Lona Logic Grammar
// A subset of Swift for defining design tokens
//
// This parses Swift code as a LogicLanguage.types data type.
//
// ---
//
// VSCode extensions:
//
// For syntax highlighting: https://marketplace.visualstudio.com/items?itemName=SirTobi.pegjs-language
// For live preview/sandbox: https://marketplace.visualstudio.com/items?itemName=joeandaverde.vscode-pegjs-live

{
  function uuid() {
    return options.generateId()
  }

  function extractList(list, index) {
    return list.map(function(element) { return element[index]; });
  }

  function buildList(head, tail, index) {
    return [head].concat(extractList(tail, index));
  }

  function placeholder() {
    return { data: { id: uuid() }, type: 'placeholder' }
  }

  function normalizeListWithPlaceholder(list) {
    return (list || []).concat([placeholder()])
  }
}

comment =
  "/*" value:(!"*/" .)* "*/" {
    const cleanedUp = value.map(x => x[1]).join('')
    const removeStars = cleanedUp.split('\n')
        .map(x => x.replace(/^ +\* ?/g, ''))
        .join('\n')
        .trim()

    return {
      id: uuid(),
      string: removeStars
    }
  }

enumerationCase =
  comment:(comment _)? attributes:(attributeList _)? "case " _ name:pattern "(" associatedValues:associatedValueList? ")" {
    const result = {
      type: 'enumerationCase',
      data: {
        id: uuid(),
        name,
        associatedValues: normalizeListWithPlaceholder(
          associatedValues ? associatedValues : []
        ),
        attributes: attributes ? attributes[0] : []
      }
    }

    if (comment) {
      result.data.comment = comment[0]
    }

    return result
  }

enumerationCaseList =
  head:enumerationCase tail:((LineTerminator / ",") _ enumerationCase)* _ {
    return buildList(head, tail, 2)
  }

associatedValue =
  label:(pattern _ ":")? _ annotation:typeAnnotation {
    return {
      type: 'associatedValue',
      data: {
        id: uuid(),
        annotation,
        ...(label ? { label: label[0] } : {}),
      }
    }
  }

associatedValueList =
  head:associatedValue tail:("," _ associatedValue)* {
    return buildList(head, tail, 2)
  }

topLevelDeclarations =
  _ declarations:declarationList _ {
    return {
      data: {
      	declarations: normalizeListWithPlaceholder(declarations),
        id: uuid(),
      },
      type: 'topLevelDeclarations'
    }
  }

program =
  _ statementList:statementList _ {
    return {
      data: {
        block: normalizeListWithPlaceholder(statementList),
        id: uuid()
      },
      type: 'program',
    }
  }

statement =
  branchStatement / returnStatement / loopStatement / declaration:declaration {
    return {
      data: {
        content: declaration,
        id: uuid()
      },
      type: 'declaration'
    }
  } / expression:expression {
    return {
      data: {
        expression: expression,
        id: uuid()
      },
      type: 'expression'
    }
  }

statementList =
  head:statement tail:(_ statement)* {
    return buildList(head, tail, 1)
  }

branchStatement =
  "if " _ condition:expression _ "{" _ block:statementList _ "}" {
    return {
      type: 'branch',
      data:{
        id: uuid(),
        condition,
        block: normalizeListWithPlaceholder(block)
      }
    }
  }

loopStatement =
  "while " _ expression:expression _ "{" _ block:statementList _ "}" {
    return {
      type: 'loop',
      data:{
        id: uuid(),
        expression,
        block: normalizeListWithPlaceholder(block)
      }
    }
  }

returnStatement =
  "return " _ expression:expression {
    return {
      type: 'return',
      data:{
        id: uuid(),
        expression
      }
    }
  }

declaration =
  enumDeclaration /
  importDeclaration /
  variableDeclaration /
  functionDeclaration /
  recordDeclaration /
  namespaceDeclaration

declarationList =
  head:declaration tail:(_ declaration)* {
    return buildList(head, tail, 1)
  }

enumDeclaration =
  comment:(comment _)? attributes:(attributeList _)? "enum " _ name:pattern _ genericParameters:( "<" genericParameterList ">" )? _ "{" _ cases:enumerationCaseList _ "}" {
    const result = {
      data: {
        genericParameters: normalizeListWithPlaceholder(genericParameters ? genericParameters[1] : []),
        id: uuid(),
        name,
        cases: normalizeListWithPlaceholder(cases),
        attributes: attributes ? attributes[0] : []
      },
      type: 'enumeration',
    }

    if (comment) {
      result.data.comment = comment[0]
    }

    return result
  }

namespaceDeclaration =
  "extension " _ name:pattern _ "{" _ declarations:declarationList? _ "}" {
    return {
      data: {
        // Delete declaration modifier for now, since we don't store these
        declarations: normalizeListWithPlaceholder(declarations).map(declaration => {
          delete declaration.data.declarationModifier
          return declaration
        }),
        id: uuid(),
        name,
      },
      type: 'namespace',
    }
  }

functionDeclaration =
  comment:(comment _)? "func " _ name:pattern _ genericParameters:( "<" genericParameterList ">" )? _ "(" _ parameters:(functionParameterList)? _ ")" _ "->" _ returnType:typeAnnotation _ "{" _ block:statementList? _ "}" {
    const result = {
      block: normalizeListWithPlaceholder(block),
      genericParameters: normalizeListWithPlaceholder(genericParameters ? genericParameters[1] : []),
      parameters: normalizeListWithPlaceholder(parameters ? parameters : []),
      returnType,
      id: uuid(),
      name,
    }

    if (comment) {
      const reg = /(@param ([_a-zA-Z0-9]+) - )((?:.|\n       |\n{2,})*)/g
      let resultString = comment[0].string
      let commentWithoutParams = resultString

      let match = reg.exec(resultString)

      let linesToRemove = match ? 1 : 0

      while (match) {
        const label = match[2]
        const matchingParam = result.parameters.find(
          x => x.data && x.data.localName && x.data.localName.name === label
        )
        if (matchingParam) {
          const paramComment = match[3]
          matchingParam.data.comment = {
            id: uuid(),
            string: paramComment.split('\n')
              .map((l, i) => i === 0 ? l : l.slice(match[1].length))
              .join('\n')
          }
        }
        commentWithoutParams = commentWithoutParams.replace(match[0], '')
        linesToRemove++
        match = reg.exec(resultString)
      }

      for (let i = 0; i < linesToRemove; i++) {
        commentWithoutParams = commentWithoutParams.replace(/\n$/g, '')
      }

      result.comment = {
        string: commentWithoutParams,
        id: comment[0].id
      }
    }

    return { type: 'function', data: result }
  }

importDeclaration =
  "import " _ name:pattern {
    return {
      type: 'importDeclaration',
      data: {
        id: uuid(),
        name,
      }
    }
  }

recordDeclaration =
  comment:(comment _)? attributes:(attributeList _)? "struct " _ name:pattern _ genericParameters:( "<" genericParameterList ">" )? _  "{" _ declarations:declarationList? _ "}" {
    const result = {
      // Delete declaration modifier for now, since we don't store these
      declarations: normalizeListWithPlaceholder(declarations).map(declaration => {
        delete declaration.data.declarationModifier
        return declaration
      }),
      genericParameters: normalizeListWithPlaceholder(genericParameters ? genericParameters[1] : []),
      id: uuid(),
      name,
      attributes: attributes ? attributes[0] : []
    }

    if (comment) {
      result.comment = comment[0]
    }

    return { type: 'record', data: result }
  }

declarationModifier = "static" { return text() }

variableDeclaration =
  comment:(comment _)? attributes:(attributeList _)? declarationModifier:(declarationModifier _)?
  "let " _ name:pattern _ ":" _
  annotation:typeAnnotation _ "=" _ initializer:expression {
    const result = {
      annotation,
      id: uuid(),
      initializer,
      name,
      attributes: attributes ? attributes[0] : []
    }

    if (declarationModifier) {
      result.declarationModifier = declarationModifier[0]
    }

    if (comment) {
      result.comment = comment[0]
    }

    return { type: 'variable', data: result }
  }

attributeList =
  head:attribute tail:(_ attribute)* {
    return buildList(head, tail, 1)
  }

attribute = "@" _ value:functionCallExpression {
  return value
}

// Expressions

expression =
  assignmentExpression /
  literalExpression /
  functionCallExpression /
  memberExpression /
  identifierExpression

expressionList =
  head:expression tail:("," _ expression)* {
    return buildList(head, tail, 2)
  }

assignmentExpression =
  left:(literalExpression / memberExpression / identifierExpression) _ "=" _ right:expression {
    return {
      data: { left, id: uuid(), right },
      type: 'assignmentExpression',
    }
  }

functionCallExpression =
  expression:(literalExpression / memberExpression / identifierExpression) "(" args:functionCallArgumentList? ")" {
    return {
      data: { expression, id: uuid(), arguments: normalizeListWithPlaceholder(args) },
      type: 'functionCallExpression',
    }
  }

memberExpression =
  expression:(literalExpression / identifierExpression) "." memberName:identifier {
    return {
      data: { expression, id: uuid(), memberName },
      type: 'memberExpression',
    }
  }

literalExpression =
  literal:literal {
    return {
      data: { id: uuid(), literal },
      type: 'literalExpression',
    }
  }

identifierExpression =
  identifier:identifier {
    return {
      data: { id: uuid(), identifier },
      type: 'identifierExpression'
    }
  }

// Function Parameter

functionParameter =
  localName:pattern _ ":" _ annotation:typeAnnotation _ defaultValue:("=" _ expression)? {
    return {
      data: {
        localName,
        annotation,
        id: uuid(),
        defaultValue: defaultValue ? {
          type: 'value',
          data: {
            id: uuid(),
            expression: defaultValue[2]
          }
        } : {
          type: 'none',
          data: { id: uuid() }
        }
      },
      type: 'parameter',
    }
  }

functionParameterList =
  head:functionParameter tail:("," _ functionParameter)* {
    return buildList(head, tail, 2)
  }

// Function Call Argument

functionCallArgumentList =
  head:functionCallArgument tail:("," _ functionCallArgument)* {
    return buildList(head, tail, 2)
  }

functionCallArgument =
  label:(rawIdentifier _ ":")? _ expression:expression {
    return {
      data: {
        expression,
        id: uuid(),
        label: label ? label[0] : null
      },
      type: 'argument',
    }
  }

// Generic Parameters

genericParameter =
  name:pattern {
    return {
      type: 'parameter',
      data: {
        id: uuid(),
        name
      }
    }
  }

genericParameterList =
  head:genericParameter tail:("," _ genericParameter)* {
    return buildList(head, tail, 2)
  }

// Literals

literal =
  booleanLiteral /
  numberLiteral /
  stringLiteral /
  arrayLiteral /
  colorLiteral

booleanLiteral =
  value:booleanValue {
    return {
      data: { id: uuid(), value: !!value },
      type: 'boolean',
    }
  }

numberLiteral =
  value:numberValue {
    return {
      data: { id: uuid(), value },
      type: 'number',
    }
  }

stringLiteral =
  value:stringValue {
    return {
      data: { id: uuid(), value },
      type: 'string',
    }
  }

arrayLiteral =
  value:arrayValue {
    return {
      data: { id: uuid(), value },
      type: 'array',
    }
  }

colorLiteral =
  value:colorValue {
    return {
      data: { id: uuid(), value },
      type: 'color',
    }
  }

// Type Annotations

typeAnnotation =
  identifier:identifier genericArguments:( "<" typeAnnotationList ">" )? {
    return {
      data: {
        genericArguments: genericArguments ? genericArguments[1] : [],
        id: uuid(),
        identifier
      },
      type: 'typeIdentifier',
    }
  }

typeAnnotationList =
  head:typeAnnotation tail:("," _ typeAnnotation)* {
    return buildList(head, tail, 2)
  }

pattern = name:rawIdentifier { return { id: uuid(), name } }

identifier =
  string:rawIdentifier {
    return {
      id: uuid(),
      isPlaceholder: false,
      string
    }
  }

// Values

numberValue = floatValue / intValue

floatValue = [+\-] ? [0-9] "." [0-9]+ { return Number(text()) }

intValue = [+\-] ? [0-9]+ { return Number(text()) }

booleanValue = "true" / "false" { return text() === "true" }

stringValue = "\"" ([^\""\\"] / "\\".)* "\"" { return text().slice(1, -1).replace(/\\"/g, '"') }

arrayValue = "[" _ expressionList:expressionList? _ "]" {
  return normalizeListWithPlaceholder(expressionList)
}

colorValue = "#color(css:" _ value:stringValue _ ")" { return value }

// Source characters

rawIdentifier = [_a-zA-Z] [_a-zA-Z0-9]* { return text() }

_ "whitespace"
  = [ \t\n\r]*

LineTerminator
  = [\n\r\u2028\u2029]

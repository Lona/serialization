import * as AST from '../../ast/logicAst'
import { indentBlock, repeat } from '../formatting'
import { assertNever } from '../../utils'

function noPlaceholder(x: AST.SyntaxNode) {
  return x.type !== 'placeholder'
}

function printComment(node: AST.SyntaxNode, additionalComment: string = '') {
  if ('comment' in node.data && node.data.comment && node.data.comment.string) {
    return `/*
${node.data.comment.string
  .split('\n')
  .map(x => (x ? ` * ${x}` : ` *`))
  .join('\n')}${additionalComment ? `\n *\n${additionalComment}` : ''}
 */\n`
  }
  return ''
}

export function print(node: AST.SyntaxNode, options: { indent?: number } = {}) {
  const { indent = 2 } = options

  function printAttributes(attributes: AST.FunctionCallExpression[]): string {
    return attributes
      .map(printNode)
      .map(string => `@${string}`)
      .join('\n')
  }

  function printNode(node: AST.SyntaxNode): string {
    switch (node.type) {
      case 'program': {
        const { block } = node.data

        return block
          .filter(noPlaceholder)
          .map(printNode)
          .join('\n\n')
      }
      case 'topLevelDeclarations': {
        const { declarations } = node.data

        return declarations
          .filter(noPlaceholder)
          .map(printNode)
          .join('\n\n')
      }
      // Declaration statement
      case 'declaration': {
        return printNode(node.data.content)
      }
      case 'importDeclaration': {
        const { name } = node.data

        return `import ${name.name}`
      }
      case 'namespace': {
        const { name, declarations } = node.data

        const normalizedDeclarations = declarations
          .filter(noPlaceholder)
          .map(declaration => {
            return {
              ...declaration,
              data: { ...declaration.data, declarationModifier: 'static' },
            } as AST.Declaration
          })

        const printedDeclarations = normalizedDeclarations
          .map(x => printNode(x))
          .map(x => indentBlock(x, indent))
          .join('\n')

        return `${printComment(node)}extension ${name.name} {
${printedDeclarations}
}`
      }
      case 'record': {
        const { name, declarations, attributes } = node.data

        const printedDeclarations = declarations
          .filter(noPlaceholder)
          .map(x => printNode(x))
          .map(x => indentBlock(x, indent))
          .join('\n')

        const attributesString =
          attributes.length > 0 ? printAttributes(attributes) + '\n' : ''

        const generics = node.data.genericParameters.filter(noPlaceholder)

        return `${printComment(node)}${attributesString}struct ${name.name}${
          generics.length ? `<${generics.map(printNode).join(', ')}>` : ''
        } {
${printedDeclarations}
}`
      }
      case 'variable': {
        const {
          annotation,
          initializer,
          name,
          declarationModifier,
          attributes,
        } = node.data

        const printedDeclarationModifier = declarationModifier
          ? `${declarationModifier} `
          : ''
        const printedAnnotation = annotation ? `: ${printNode(annotation)}` : ''
        const printedInitializer = initializer
          ? ` = ${printNode(initializer)}`
          : ''

        const attributesString =
          attributes.length > 0 ? printAttributes(attributes) + '\n' : ''

        return `${printComment(
          node
        )}${attributesString}${printedDeclarationModifier}let ${
          name.name
        }${printedAnnotation}${printedInitializer}`
      }
      case 'typeIdentifier': {
        const { genericArguments, identifier } = node.data

        return genericArguments.filter(noPlaceholder).length > 0
          ? `${identifier.string}<${genericArguments
              .filter(noPlaceholder)
              .map(printNode)
              .join(', ')}>`
          : identifier.string
      }
      case 'functionCallExpression': {
        const { expression } = node.data

        const printedArguments = node.data.arguments
          .filter(noPlaceholder)
          .map(printNode)
          .join(', ')

        return `${printNode(expression)}(${printedArguments})`
      }
      case 'argument': {
        const { expression, label } = node.data

        return label
          ? `${label}: ${printNode(expression)}`
          : printNode(expression)
      }
      case 'memberExpression': {
        const { expression, memberName } = node.data

        return printNode(expression) + '.' + memberName.string
      }
      case 'identifierExpression': {
        const { identifier } = node.data

        return identifier.string
      }
      case 'literalExpression': {
        const { literal } = node.data

        return printNode(literal)
      }
      case 'boolean':
      case 'number': {
        const { value } = node.data

        return value.toString()
      }
      case 'string': {
        const { value } = node.data

        return JSON.stringify(value)
      }
      case 'color': {
        const { value } = node.data

        return `#color(css: ${JSON.stringify(value)})`
      }
      case 'array': {
        const { value } = node.data

        const printedExpressions = value
          .filter(noPlaceholder)
          .map(printNode)
          .map(x => indentBlock(x, indent))
          .join(',\n')

        return `[
${printedExpressions}
]`
      }
      case 'loop': {
        return `while ${printNode(node.data.expression)} {
${node.data.block
  .filter(noPlaceholder)
  .map(printNode)
  .map(x => indentBlock(x, indent))
  .join('\n')}
}`
      }
      case 'branch': {
        return `if ${printNode(node.data.condition)} {
${node.data.block
  .filter(noPlaceholder)
  .map(printNode)
  .map(x => indentBlock(x, indent))
  .join('\n')}
}`
      }
      case 'expression': {
        return printNode(node.data.expression)
      }
      case 'function': {
        const generics = node.data.genericParameters.filter(noPlaceholder)
        const params = node.data.parameters.filter(noPlaceholder)

        const paramsComment = params
          .map(x => {
            if (x.type !== 'parameter') {
              return ''
            }

            if (!x.data.comment || !x.data.comment.string) {
              return ''
            }
            let comment = ` * @param ${x.data.localName.name}`
            const indent = `@param ${x.data.localName.name} - `.length
            comment += ` - ${x.data.comment.string
              .split('\n')
              .map((l, i) =>
                i === 0 ? l : l ? ` * ${repeat(' ', indent)}${l}` : ` *`
              )
              .join('\n')}`

            return comment
          })
          .filter(x => !!x)
          .join('\n')

        const body = node.data.block.filter(noPlaceholder)

        return `${printComment(node, paramsComment)}func ${
          node.data.name.name
        }${
          generics.length ? `<${generics.map(printNode).join(', ')}>` : ''
        }(${params.map(printNode).join(', ')}) -> ${printNode(
          node.data.returnType
        )} ${
          body.length
            ? `{
${node.data.block
  .filter(noPlaceholder)
  .map(printNode)
  .map(x => indentBlock(x, indent))
  .join('\n')}
}`
            : `{}`
        }`
      }
      case 'enumeration': {
        const {
          attributes,
          genericParameters,
          name: { name },
          cases,
        } = node.data

        const attributesString =
          attributes.length > 0 ? printAttributes(attributes) + '\n' : ''

        const generics = genericParameters.filter(noPlaceholder)
        return `${printComment(node)}${attributesString}enum ${name}${
          generics.length ? `<${generics.map(printNode).join(', ')}>` : ''
        } {
${cases
  .filter(noPlaceholder)
  .map(printNode)
  .map(x => indentBlock(x, indent))
  .join('\n')}
}`
      }
      case 'enumerationCase': {
        const { name, associatedValues, attributes } = node.data

        const attributesString =
          attributes.length > 0 ? printAttributes(attributes) + '\n' : ''

        const valueTypes = associatedValues.filter(noPlaceholder)
        return `${printComment(node)}${attributesString}case ${
          name.name
        }(${valueTypes.map(printNode).join(', ')})`
      }
      case 'associatedValue': {
        const label = node.data.label?.name

        if (label) {
          return `${label}: ${printNode(node.data.annotation)}`
        } else {
          return `${printNode(node.data.annotation)}`
        }
      }
      case 'assignmentExpression': {
        return `${printNode(node.data.left)} = ${printNode(node.data.right)}`
      }
      case 'placeholder':
        return ''
      case 'parameter': {
        if ('annotation' in node.data) {
          return `${node.data.localName.name}: ${printNode(
            node.data.annotation
          )}${
            node.data.defaultValue.type === 'value'
              ? ` = ${printNode(node.data.defaultValue)}`
              : ''
          }`
        }
        return node.data.name.name
      }
      case 'none': {
        return ''
      }
      case 'value': {
        return printNode(node.data.expression)
      }
      case 'functionType': {
        return `(${node.data.argumentTypes
          .filter(noPlaceholder)
          .map(printNode)
          .join(', ')}) -> ${printNode(node.data.returnType)}`
      }
      case 'topLevelParameters': {
        // TODO: what is that?
        return ''
      }
      case 'return': {
        return `return ${printNode(node.data.expression)}`
      }
      default:
        console.log(node)
        assertNever(node)
    }
    return ''
  }

  return printNode(node)
}

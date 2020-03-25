import { v4 as uuid } from 'uuid'
import * as AST from '../../types/logic-ast'
import { indentBlock, repeat } from '../../formatting'
import { assertNever, rng } from '../../utils'
import parser from './pegjs/logicSwiftParser'

function noPlaceholder(x: AST.SyntaxNode) {
  return x.type !== 'placeholder'
}

export function parse(code: string, options?: {}): AST.SyntaxNode {
  return parser.parse(
    code,
    Object.assign({ generateId: () => uuid({ rng }) }, options)
  )
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
        const { name, declarations } = node.data

        const printedDeclarations = declarations
          .filter(noPlaceholder)
          .map(x => printNode(x))
          .map(x => indentBlock(x, indent))
          .join('\n')

        const generics = node.data.genericParameters.filter(noPlaceholder)

        return `${printComment(node)}struct ${name.name}${
          generics.length ? `<${generics.map(printNode).join(', ')}>` : ''
        } {
${printedDeclarations}
}`
      }
      case 'variable': {
        const { annotation, initializer, name, declarationModifier } = node.data

        const printedDeclarationModifier = declarationModifier
          ? `${declarationModifier} `
          : ''
        const printedAnnotation = annotation ? `: ${printNode(annotation)}` : ''
        const printedInitializer = initializer
          ? ` = ${printNode(initializer)}`
          : ''

        return `${printComment(node)}${printedDeclarationModifier}let ${
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
        const generics = node.data.genericParameters.filter(noPlaceholder)
        return `${printComment(node)}enum ${node.data.name.name}${
          generics.length ? `<${generics.map(printNode).join(', ')}>` : ''
        } {
${node.data.cases
  .filter(noPlaceholder)
  .map(printNode)
  .map(x => indentBlock(x, indent))
  .join('\n')}
}`
      }
      case 'enumerationCase': {
        const valueTypes = node.data.associatedValueTypes.filter(noPlaceholder)
        return `${printComment(node)}case ${
          node.data.name.name
        }(${valueTypes.map(printNode).join(', ')})`
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

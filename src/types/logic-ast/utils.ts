import { SyntaxNode } from './'
import { assertNever } from '../../utils'

export function subNodes(node: SyntaxNode): SyntaxNode[] {
  switch (node.type) {
    case 'loop':
      return ([node.data.expression] as SyntaxNode[]).concat(node.data.block)
    case 'branch':
      return ([node.data.condition] as SyntaxNode[]).concat(node.data.block)
    case 'declaration':
      return [node.data.content]
    case 'expression':
      return [node.data.expression]
    case 'variable':
      return ([] as SyntaxNode[])
        .concat(node.data.annotation ? [node.data.annotation] : [])
        .concat(node.data.initializer ? [node.data.initializer] : [])
    case 'function':
      return ([node.data.returnType] as SyntaxNode[])
        .concat(node.data.genericParameters)
        .concat(node.data.parameters)
        .concat(node.data.block)
    case 'enumeration':
      return ([] as SyntaxNode[])
        .concat(node.data.genericParameters)
        .concat(node.data.cases)
    case 'namespace':
      return node.data.declarations
    case 'record':
      return ([] as SyntaxNode[])
        .concat(node.data.declarations)
        .concat(node.data.genericParameters)
    case 'assignmentExpression':
      return [node.data.left, node.data.right]
    case 'functionCallExpression':
      return ([node.data.expression] as SyntaxNode[]).concat(
        node.data.arguments
      )
    case 'literalExpression':
      return [node.data.literal]
    case 'memberExpression':
      return [node.data.expression]
    case 'program':
      return node.data.block
    case 'parameter': {
      if ('localName' in node.data) {
        return [node.data.annotation, node.data.defaultValue]
      }
      return []
    }
    case 'value':
      return [node.data.expression]
    case 'typeIdentifier':
      return node.data.genericArguments
    case 'functionType':
      return ([node.data.returnType] as SyntaxNode[]).concat(
        node.data.argumentTypes
      )
    case 'array':
      return node.data.value
    case 'enumerationCase':
      return node.data.associatedValueTypes
    case 'topLevelDeclarations':
      return node.data.declarations
    case 'argument':
      return [node.data.expression]
    case 'return':
      return [node.data.expression]
    case 'topLevelParameters':
      return node.data.parameters
    case 'importDeclaration':
    case 'identifierExpression':
    case 'boolean':
    case 'string':
    case 'number':
    case 'none':
    case 'color':
    case 'placeholder':
      return []
    // Conditions
    case 'caseCondition':
      return [node.data.initializer]
    case 'expressionCondition':
      return [node.data.expression]
    // Patterns
    case 'tuplePattern':
      return node.data.elements
    case 'enumerationCasePattern':
      return [node.data.typeIdentifier, ...node.data.tuple.elements]
    case 'valueBindingPattern':
      return [node.data.pattern]
    case 'identifierPattern':
      return []
    default:
      assertNever(node)
  }

  return []
}

import { SyntaxNode } from './'

export function subNodes(node: SyntaxNode): SyntaxNode[] {
  if (node.type === 'loop') {
    return ([node.data.expression] as SyntaxNode[]).concat(node.data.block)
  }
  if (node.type === 'branch') {
    return ([node.data.condition] as SyntaxNode[]).concat(node.data.block)
  }
  if (node.type === 'declaration') {
    return [node.data.content]
  }
  if (node.type === 'expression') {
    return [node.data.expression]
  }

  if (node.type === 'variable') {
    return ([] as SyntaxNode[])
      .concat(node.data.annotation ? [node.data.annotation] : [])
      .concat(node.data.initializer ? [node.data.initializer] : [])
  }
  if (node.type === 'function') {
    return ([node.data.returnType] as SyntaxNode[])
      .concat(node.data.genericParameters)
      .concat(node.data.parameters)
      .concat(node.data.block)
  }
  if (node.type === 'enumeration') {
    return ([] as SyntaxNode[])
      .concat(node.data.genericParameters)
      .concat(node.data.cases)
  }
  if (node.type === 'namespace') {
    return node.data.declarations
  }
  if (node.type === 'record') {
    return ([] as SyntaxNode[])
      .concat(node.data.declarations)
      .concat(node.data.genericParameters)
  }
  if (node.type === 'assignmentExpression') {
    return [node.data.left, node.data.right]
  }
  if (node.type === 'functionCallExpression') {
    return ([node.data.expression] as SyntaxNode[]).concat(node.data.arguments)
  }
  if (node.type === 'literalExpression') {
    return [node.data.literal]
  }
  if (node.type === 'memberExpression') {
    return [node.data.expression]
  }

  if (node.type === 'program') {
    return node.data.block
  }

  if (node.type === 'parameter') {
    if ('localName' in node.data) {
      return [node.data.annotation, node.data.defaultValue]
    }
  }

  if (node.type === 'value') {
    return [node.data.expression]
  }

  if (node.type === 'typeIdentifier') {
    return node.data.genericArguments
  }
  if (node.type === 'functionType') {
    return ([node.data.returnType] as SyntaxNode[]).concat(
      node.data.argumentTypes
    )
  }

  if (node.type === 'array') {
    return node.data.value
  }

  if (node.type === 'topLevelParameters') {
    return node.data.parameters
  }

  if (node.type === 'enumerationCase') {
    return node.data.associatedValueTypes
  }

  if (node.type === 'topLevelDeclarations') {
    return node.data.declarations
  }

  if (node.type === 'argument') {
    return [node.data.expression]
  }

  return []
}

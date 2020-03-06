import {
  Statement,
  Pattern,
  Identifier,
  SyntaxNode,
  Declaration,
  Expression,
  TypeAnnotation,
} from './'

export function isStatement(
  node: SyntaxNode | Pattern | Identifier
): node is Statement {
  return (
    'type' in node &&
    (node.type === 'loop' ||
      node.type === 'branch' ||
      node.type === 'declaration' ||
      node.type === 'expression')
  )
}

export function isDeclaration(
  node: SyntaxNode | Pattern | Identifier
): node is Declaration {
  return (
    'type' in node &&
    (node.type === 'variable' ||
      node.type === 'function' ||
      node.type === 'enumeration' ||
      node.type === 'namespace' ||
      node.type === 'placeholder' ||
      node.type === 'record' ||
      node.type === 'importDeclaration')
  )
}

export function isExpression(
  node: SyntaxNode | Pattern | Identifier
): node is Expression {
  return (
    'type' in node &&
    (node.type === 'assignmentExpression' ||
      node.type === 'functionCallExpression' ||
      node.type === 'identifierExpression' ||
      node.type === 'literalExpression' ||
      node.type === 'memberExpression')
  )
}

export function isTypeAnnotation(
  node: SyntaxNode | Pattern | Identifier
): node is TypeAnnotation {
  return (
    'type' in node &&
    (node.type === 'typeIdentifier' ||
      node.type === 'functionType' ||
      node.type === 'placeholder')
  )
}

import stringify from 'json-stable-stringify'
import * as AST from '../../ast/logicAst'

export function print(ast: AST.SyntaxNode) {
  return stringify(ast, { space: '  ' })
}

export function parse(contents: string): AST.SyntaxNode {
  return JSON.parse(contents)
}

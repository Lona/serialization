import * as AST from '../../ast/logicAst'

export function parse(contents: string): AST.SyntaxNode {
  return JSON.parse(contents)
}

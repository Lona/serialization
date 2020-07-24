import { v4 as uuid } from 'uuid'
import * as AST from '../../ast/logicAst'
import parser from './pegjs/logicParser'
import { rng } from '../../utils'

export function parse(code: string, options?: {}): AST.SyntaxNode {
  return parser.parse(
    code,
    Object.assign({ generateId: () => uuid({ rng }) }, options)
  )
}

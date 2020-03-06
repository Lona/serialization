import { Pattern, Expression, Statement } from '../'

export type LoopStatement = {
  type: 'loop'
  data: {
    pattern: Pattern
    expression: Expression
    block: Statement[]
    id: string
  }
}

import { Expression, Statement, UUID } from '..'

export type LoopStatement = {
  type: 'loop'
  data: {
    expression: Expression
    block: Statement[]
    id: UUID
  }
}

import { Expression, Statement } from '../'

export type LoopStatement = {
  type: 'loop'
  data: {
    expression: Expression
    block: Statement[]
    id: string
  }
}

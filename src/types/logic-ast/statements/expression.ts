import { Expression } from '../'

export type ExpressionStatement = {
  type: 'expression'
  data: {
    id: string
    expression: Expression
  }
}

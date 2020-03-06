import { Expression } from '../'

export type ReturnStatement = {
  type: 'return'
  data: {
    expression: Expression
    id: string
  }
}

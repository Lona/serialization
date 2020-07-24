import { Expression, UUID } from '..'

export type ReturnStatement = {
  type: 'return'
  data: {
    expression: Expression
    id: UUID
  }
}

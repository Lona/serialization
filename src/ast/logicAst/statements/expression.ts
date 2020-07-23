import { Expression, UUID } from '..'

export type ExpressionStatement = {
  type: 'expression'
  data: {
    id: UUID
    expression: Expression
  }
}

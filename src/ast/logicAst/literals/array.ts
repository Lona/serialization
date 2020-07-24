import { Expression, UUID } from '..'

export type ArrayLiteral = {
  type: 'array'
  data: {
    id: UUID
    value: Expression[]
  }
}

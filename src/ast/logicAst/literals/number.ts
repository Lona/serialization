import { UUID } from '..'

export type NumberLiteral = {
  type: 'number'
  data: {
    id: UUID
    value: number
  }
}

import { UUID } from '../'

export type StringLiteral = {
  type: 'string'
  data: {
    id: UUID
    value: string
  }
}

import { UUID } from '../'

export type BooleanLiteral = {
  type: 'boolean'
  data: {
    id: UUID
    value: boolean
  }
}

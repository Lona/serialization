import { Literal, UUID } from '../'

export type LiteralExpression = {
  type: 'literalExpression'
  data: {
    id: UUID
    literal: Literal
  }
}

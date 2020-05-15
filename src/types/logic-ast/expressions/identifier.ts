import { IdentifierPattern, UUID } from '../'

export type IdentifierExpression = {
  type: 'identifierExpression'
  data: {
    id: UUID
    identifier: IdentifierPattern
  }
}

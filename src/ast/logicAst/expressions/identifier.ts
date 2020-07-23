import { Identifier, UUID } from '..'

export type IdentifierExpression = {
  type: 'identifierExpression'
  data: {
    id: UUID
    identifier: Identifier
  }
}

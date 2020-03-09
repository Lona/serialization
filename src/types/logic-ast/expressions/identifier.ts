import { Identifier } from '../'

export type IdentifierExpression = {
  type: 'identifierExpression'
  data: {
    id: string
    identifier: Identifier
  }
}

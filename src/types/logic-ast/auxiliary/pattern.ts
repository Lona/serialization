import { UUID } from '../'

export type IdentifierPattern = {
  id: UUID
  name: string
}

export type Pattern = { type: 'identifierPattern'; data: IdentifierPattern }

import { Placeholder, IdentifierPattern, UUID } from '../'

export type GenericParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: UUID
        name: IdentifierPattern
      }
    }

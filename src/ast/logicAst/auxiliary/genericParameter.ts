import { Placeholder, Pattern, UUID } from '..'

export type GenericParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: UUID
        name: Pattern
      }
    }

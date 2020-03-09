import { Placeholder, Pattern } from '../'

export type GenericParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: string
        name: Pattern
      }
    }

import { Placeholder, Pattern, TypeAnnotation } from '../'

export type EnumerationCase =
  | Placeholder
  | {
      type: 'enumerationCase'
      data: {
        id: string
        name: Pattern
        associatedValueTypes: TypeAnnotation[]
        comment?: {
          id: string
          string: string
        }
      }
    }

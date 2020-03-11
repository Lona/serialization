import { Placeholder, Pattern, TypeAnnotation, UUID, Comment } from '../'

export type EnumerationCase =
  | Placeholder
  | {
      type: 'enumerationCase'
      data: {
        id: UUID
        name: Pattern
        associatedValueTypes: TypeAnnotation[]
        comment?: Comment
      }
    }

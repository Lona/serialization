import {
  Placeholder,
  IdentifierPattern,
  TypeAnnotation,
  UUID,
  Comment,
} from '../'

export type EnumerationCase =
  | Placeholder
  | {
      type: 'enumerationCase'
      data: {
        id: UUID
        name: IdentifierPattern
        associatedValueTypes: TypeAnnotation[]
        comment?: Comment
      }
    }

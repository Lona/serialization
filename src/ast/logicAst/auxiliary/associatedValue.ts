import { Pattern, Placeholder, TypeAnnotation, UUID } from '..'

export type AssociatedValue =
  | Placeholder
  | {
      type: 'associatedValue'
      data: {
        id: UUID
        label?: Pattern
        annotation: TypeAnnotation
      }
    }

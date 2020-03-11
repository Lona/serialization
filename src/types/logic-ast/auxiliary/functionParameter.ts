import {
  Placeholder,
  Pattern,
  TypeAnnotation,
  FunctionParameterDefaultValue,
  UUID,
  Comment,
} from '../'

export type FunctionParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: UUID
        localName: Pattern
        annotation: TypeAnnotation
        defaultValue: FunctionParameterDefaultValue
        comment?: Comment
      }
    }

import {
  Placeholder,
  IdentifierPattern,
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
        localName: IdentifierPattern
        annotation: TypeAnnotation
        defaultValue: FunctionParameterDefaultValue
        comment?: Comment
      }
    }

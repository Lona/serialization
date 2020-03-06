import {
  Placeholder,
  Pattern,
  TypeAnnotation,
  FunctionParameterDefaultValue,
} from '../'

export type FunctionParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: string
        // TODO: remove this
        externalName?: string
        localName: Pattern
        annotation: TypeAnnotation
        defaultValue: FunctionParameterDefaultValue
        comment?: {
          id: string
          string: string
        }
      }
    }

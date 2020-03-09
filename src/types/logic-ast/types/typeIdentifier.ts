import { Identifier, TypeAnnotation } from '..'

export type TypeIdentifierTypeAnnotation = {
  type: 'typeIdentifier'
  data: {
    id: string
    identifier: Identifier
    genericArguments: TypeAnnotation[]
  }
}

import { Identifier, TypeAnnotation, UUID } from '..'

export type TypeIdentifierTypeAnnotation = {
  type: 'typeIdentifier'
  data: {
    id: UUID
    identifier: Identifier
    genericArguments: TypeAnnotation[]
  }
}

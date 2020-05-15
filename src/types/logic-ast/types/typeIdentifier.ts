import { IdentifierPattern, TypeAnnotation, UUID } from '..'

export type TypeIdentifierTypeAnnotation = {
  type: 'typeIdentifier'
  data: {
    id: UUID
    identifier: IdentifierPattern
    genericArguments: TypeAnnotation[]
  }
}

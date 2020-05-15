import { IdentifierPattern, Expression, TypeAnnotation, UUID } from '../'

export type EnumerationCasePattern = {
  id: UUID
  typeIdentifier: TypeAnnotation
  caseName: IdentifierPattern // TODO: Should be Identifier
  associatedValues: Expression[]
}

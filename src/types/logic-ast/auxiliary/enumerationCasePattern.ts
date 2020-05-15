import { Identifier, Expression, TypeAnnotation, UUID } from '../'

export type EnumerationCasePattern = {
  id: UUID
  typeIdentifier: TypeAnnotation
  caseName: Identifier // TODO: Should be Identifier
  associatedValues: Expression[]
}

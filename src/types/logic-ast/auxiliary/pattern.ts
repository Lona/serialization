import { Identifier, Placeholder, TypeAnnotation, UUID } from '../'

export type IdentifierPattern = {
  id: UUID
  name: string
}

export type TuplePattern = {
  id: UUID
  elements: Pattern[]
}

export type EnumerationCasePattern = {
  id: UUID
  typeIdentifier: TypeAnnotation
  caseName: Identifier
  tuple: TuplePattern
}

export type ValueBindingPattern = {
  id: UUID
  pattern: Pattern
}

export type Pattern =
  | { type: 'identifierPattern'; data: IdentifierPattern }
  | { type: 'tuplePattern'; data: TuplePattern }
  | { type: 'enumerationCasePattern'; data: EnumerationCasePattern }
  | { type: 'valueBindingPattern'; data: ValueBindingPattern }

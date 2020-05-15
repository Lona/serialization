import {
  IdentifierPattern,
  EnumerationCase,
  GenericParameter,
  UUID,
  Comment,
} from '../'

export type EnumerationDeclaration = {
  type: 'enumeration'
  data: {
    id: UUID
    name: IdentifierPattern
    genericParameters: GenericParameter[]
    cases: EnumerationCase[]
    comment?: Comment
  }
}

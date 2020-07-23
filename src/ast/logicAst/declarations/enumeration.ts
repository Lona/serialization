import { Pattern, EnumerationCase, GenericParameter, UUID, Comment } from '..'

export type EnumerationDeclaration = {
  type: 'enumeration'
  data: {
    id: UUID
    name: Pattern
    genericParameters: GenericParameter[]
    cases: EnumerationCase[]
    comment?: Comment
  }
}

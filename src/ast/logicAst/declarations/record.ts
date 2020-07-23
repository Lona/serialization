import { Pattern, Declaration, GenericParameter, Comment, UUID } from '..'

export type RecordDeclaration = {
  type: 'record'
  data: {
    id: UUID
    name: Pattern
    genericParameters: GenericParameter[]
    declarations: Declaration[]
    comment?: Comment
  }
}

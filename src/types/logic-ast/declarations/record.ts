import {
  IdentifierPattern,
  Declaration,
  GenericParameter,
  Comment,
  UUID,
} from '../'

export type RecordDeclaration = {
  type: 'record'
  data: {
    id: UUID
    name: IdentifierPattern
    genericParameters: GenericParameter[]
    declarations: Declaration[]
    comment?: Comment
  }
}

import { Expression, IdentifierPattern, UUID } from '../'

export type MemberExpression = {
  type: 'memberExpression'
  data: {
    id: UUID
    expression: Expression
    memberName: IdentifierPattern
  }
}

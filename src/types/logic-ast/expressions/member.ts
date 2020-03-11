import { Expression, Identifier, UUID } from '../'

export type MemberExpression = {
  type: 'memberExpression'
  data: {
    id: UUID
    expression: Expression
    memberName: Identifier
  }
}

import { Expression, Identifier } from '../'

export type MemberExpression = {
  type: 'memberExpression'
  data: {
    id: string
    expression: Expression
    memberName: Identifier
  }
}

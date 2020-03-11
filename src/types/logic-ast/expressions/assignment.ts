import { Expression, UUID } from '..'

export type AssignmentExpression = {
  type: 'assignmentExpression'
  data: {
    left: Expression
    right: Expression
    id: UUID
  }
}

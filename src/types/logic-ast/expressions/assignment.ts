import { Expression } from '..'

export type AssignmentExpression = {
  type: 'assignmentExpression'
  data: {
    left: Expression
    right: Expression
    id: string
  }
}

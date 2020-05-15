import { Expression, Statement, UUID, Pattern } from '..'

export type ExpressionCondition = {
  type: 'expressionCondition'
  data: {
    id: UUID
    expression: Expression
  }
}

export type CaseCondition = {
  type: 'caseCondition'
  data: {
    id: UUID
    pattern: Pattern
    initializer: Expression
  }
}

export type Condition = ExpressionCondition | CaseCondition

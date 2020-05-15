import { Expression, EnumerationCasePattern, UUID } from '..'

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
    pattern: EnumerationCasePattern
    initializer: Expression
  }
}

export type Condition = ExpressionCondition | CaseCondition

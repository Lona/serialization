import { Expression, EnumerationCasePattern, UUID } from '..'

export type ExpressionCondition = {
  id: UUID
  expression: Expression
}

export type CaseCondition = {
  id: UUID
  pattern: EnumerationCasePattern
  initializer: Expression
}

export type Condition =
  | { type: 'expressionCondition'; data: ExpressionCondition }
  | { type: 'caseCondition'; data: CaseCondition }

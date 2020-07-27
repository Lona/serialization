import {
  FunctionCallExpression,
  AssociatedValue,
  Comment,
  Pattern,
  Placeholder,
  UUID,
} from '..'

export type EnumerationCase =
  | Placeholder
  | {
      type: 'enumerationCase'
      data: {
        id: UUID
        name: Pattern
        associatedValues: AssociatedValue[]
        comment?: Comment
        attributes: FunctionCallExpression[]
      }
    }

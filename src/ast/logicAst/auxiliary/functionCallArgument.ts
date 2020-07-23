import { Placeholder, Expression, UUID } from '..'

export type FunctionCallArgument =
  | Placeholder
  | {
      type: 'argument'
      data: {
        id: UUID
        label?: string
        expression: Expression
      }
    }

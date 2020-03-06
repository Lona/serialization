import { Placeholder, Expression } from '../'

export type FunctionCallArgument =
  | Placeholder
  | {
      type: 'argument'
      data: {
        id: string
        label: string
        expression: Expression
      }
    }

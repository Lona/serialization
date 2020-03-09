import { Expression } from '../'

export type NoneFunctionParameterDefaultValue = {
  type: 'none'
  data: { id: string }
}

export type ValueFunctionParameterDefaultValue = {
  type: 'value'
  data: {
    id: string
    expression: Expression
  }
}

export type FunctionParameterDefaultValue =
  | NoneFunctionParameterDefaultValue
  | ValueFunctionParameterDefaultValue

import { Expression, UUID } from '../'

export type NoneFunctionParameterDefaultValue = {
  type: 'none'
  data: { id: UUID }
}

export type ValueFunctionParameterDefaultValue = {
  type: 'value'
  data: {
    id: UUID
    expression: Expression
  }
}

export type FunctionParameterDefaultValue =
  | NoneFunctionParameterDefaultValue
  | ValueFunctionParameterDefaultValue

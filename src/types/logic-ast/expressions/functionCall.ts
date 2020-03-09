import { Expression, FunctionCallArgument } from '../'

export type FunctionCallExpression = {
  type: 'functionCallExpression'
  data: {
    id: string
    expression: Expression
    arguments: FunctionCallArgument[]
  }
}

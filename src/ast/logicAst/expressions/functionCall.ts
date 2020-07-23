import { Expression, FunctionCallArgument, UUID } from '..'

export type FunctionCallExpression = {
  type: 'functionCallExpression'
  data: {
    id: UUID
    expression: Expression
    arguments: FunctionCallArgument[]
  }
}

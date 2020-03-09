import { Expression } from '..'

export type ArrayLiteral = {
  type: 'array'
  data: {
    id: string
    value: Expression[]
  }
}

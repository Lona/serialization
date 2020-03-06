import { Literal } from '../'

export type LiteralExpression = {
  type: 'literalExpression'
  data: {
    id: string
    literal: Literal
  }
}

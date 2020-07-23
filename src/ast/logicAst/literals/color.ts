import { UUID } from '..'

export type ColorLiteral = {
  type: 'color'
  data: {
    id: UUID
    value: string
  }
}

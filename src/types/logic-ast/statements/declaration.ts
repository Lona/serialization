import { Declaration } from '../'

export type DeclarationStatement = {
  type: 'declaration'
  data: {
    id: string
    content: Declaration
  }
}

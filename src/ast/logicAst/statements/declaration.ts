import { Declaration, UUID } from '..'

export type DeclarationStatement = {
  type: 'declaration'
  data: {
    id: UUID
    content: Declaration
  }
}

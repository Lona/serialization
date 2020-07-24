import { Pattern, UUID } from '..'

export type ImportDeclaration = {
  type: 'importDeclaration'
  data: {
    id: UUID
    name: Pattern
  }
}

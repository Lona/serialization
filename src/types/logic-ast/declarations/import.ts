import { IdentifierPattern, UUID } from '../'

export type ImportDeclaration = {
  type: 'importDeclaration'
  data: {
    id: UUID
    name: IdentifierPattern
  }
}

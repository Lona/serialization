import { IdentifierPattern, Declaration, UUID } from '../'

export type NamespaceDeclaration = {
  type: 'namespace'
  data: {
    id: UUID
    name: IdentifierPattern
    declarations: Declaration[]
  }
}

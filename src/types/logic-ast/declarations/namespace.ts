import { Pattern, Declaration, UUID } from '../'

export type NamespaceDeclaration = {
  type: 'namespace'
  data: {
    id: UUID
    name: Pattern
    declarations: Declaration[]
  }
}

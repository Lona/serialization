import { Pattern, Declaration } from '../'

export type NamespaceDeclaration = {
  type: 'namespace'
  data: {
    id: string
    name: Pattern
    declarations: Declaration[]
  }
}

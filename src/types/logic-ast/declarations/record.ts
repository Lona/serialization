import { Pattern, Declaration, GenericParameter } from '../'

export type RecordDeclaration = {
  type: 'record'
  data: {
    id: string
    name: Pattern
    genericParameters: GenericParameter[]
    declarations: Declaration[]
    comment?: {
      id: string
      string: string
    }
  }
}

import { Pattern, EnumerationCase, GenericParameter } from '../'

export type EnumerationDeclaration = {
  type: 'enumeration'
  data: {
    id: string
    name: Pattern
    genericParameters: GenericParameter[]
    cases: EnumerationCase[]
    comment?: {
      id: string
      string: string
    }
  }
}

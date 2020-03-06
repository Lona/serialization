import { Pattern } from '../'

export type ImportDeclaration = {
  type: 'importDeclaration'
  data: {
    id: string
    name: Pattern
  }
}

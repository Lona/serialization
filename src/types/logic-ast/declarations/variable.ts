import { Pattern, TypeAnnotation, Expression } from '../'

export type VariableDeclaration = {
  type: 'variable'
  data: {
    id: string
    name: Pattern
    annotation?: TypeAnnotation
    initializer?: Expression
    declarationModifier?: string
    comment?: {
      id: string
      string: string
    }
  }
}

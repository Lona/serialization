import { Pattern, TypeAnnotation, Expression, Comment, UUID } from '../'

export type VariableDeclaration = {
  type: 'variable'
  data: {
    id: UUID
    name: Pattern
    annotation?: TypeAnnotation
    initializer?: Expression
    declarationModifier?: string
    comment?: Comment
  }
}

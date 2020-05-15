import {
  IdentifierPattern,
  TypeAnnotation,
  Expression,
  Comment,
  UUID,
} from '../'

export type VariableDeclaration = {
  type: 'variable'
  data: {
    id: UUID
    name: IdentifierPattern
    annotation?: TypeAnnotation
    initializer?: Expression
    declarationModifier?: string
    comment?: Comment
  }
}

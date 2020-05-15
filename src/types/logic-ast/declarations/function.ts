import {
  IdentifierPattern,
  TypeAnnotation,
  GenericParameter,
  FunctionParameter,
  Statement,
  UUID,
  Comment,
} from '../'

export type FunctionDeclaration = {
  type: 'function'
  data: {
    id: UUID
    name: IdentifierPattern
    returnType: TypeAnnotation
    genericParameters: GenericParameter[]
    parameters: FunctionParameter[]
    block: Statement[]
    comment?: Comment
  }
}

import {
  Pattern,
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
    name: Pattern
    returnType: TypeAnnotation
    genericParameters: GenericParameter[]
    parameters: FunctionParameter[]
    block: Statement[]
    comment?: Comment
  }
}

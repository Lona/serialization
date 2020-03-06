import {
  Pattern,
  TypeAnnotation,
  GenericParameter,
  FunctionParameter,
  Statement,
} from '../'

export type FunctionDeclaration = {
  type: 'function'
  data: {
    id: string
    name: Pattern
    returnType: TypeAnnotation
    genericParameters: GenericParameter[]
    parameters: FunctionParameter[]
    block: Statement[]
    comment?: {
      id: string
      string: string
    }
  }
}

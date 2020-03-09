import { TypeAnnotation } from '../'

export type FunctionTypeTypeAnnotation = {
  type: 'functionType'
  data: {
    id: string
    returnType: TypeAnnotation
    argumentTypes: TypeAnnotation[]
  }
}

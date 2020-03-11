import { TypeAnnotation, UUID } from '../'

export type FunctionTypeTypeAnnotation = {
  type: 'functionType'
  data: {
    id: UUID
    returnType: TypeAnnotation
    argumentTypes: TypeAnnotation[]
  }
}

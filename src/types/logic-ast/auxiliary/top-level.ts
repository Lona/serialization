import { Statement, Declaration, FunctionParameter, UUID } from '../'

export type Program = {
  type: 'program'
  data: {
    id: UUID
    block: Statement[]
  }
}

export type TopLevelDeclarations = {
  type: 'topLevelDeclarations'
  data: {
    id: UUID
    declarations: Declaration[]
  }
}

export type TopLevelParameters = {
  type: 'topLevelParameters'
  data: {
    id: UUID
    parameters: FunctionParameter[]
  }
}

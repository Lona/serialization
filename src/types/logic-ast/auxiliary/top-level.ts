import { Statement, Declaration, FunctionParameter } from '../'

export type Program = {
  type: 'program'
  data: {
    id: string
    block: Statement[]
  }
}

export type TopLevelDeclarations = {
  type: 'topLevelDeclarations'
  data: {
    id: string
    declarations: Declaration[]
  }
}

export type TopLevelParameters = {
  type: 'topLevelParameters'
  data: {
    id: string
    parameters: FunctionParameter[]
  }
}

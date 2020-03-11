import { Expression, Statement, UUID } from '../'

export type BranchStatement = {
  type: 'branch'
  data: {
    id: UUID
    condition: Expression
    block: Statement[]
  }
}

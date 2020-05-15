import { Condition, Statement, UUID } from '../'

export type BranchStatement = {
  type: 'branch'
  data: {
    id: UUID
    condition: Condition
    block: Statement[]
  }
}

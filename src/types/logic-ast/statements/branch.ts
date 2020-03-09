import { Expression, Statement } from '../'

export type BranchStatement = {
  type: 'branch'
  data: {
    id: string
    condition: Expression
    block: Statement[]
  }
}

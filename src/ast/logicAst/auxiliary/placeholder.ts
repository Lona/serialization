import { UUID } from '..'

export type Placeholder = {
  type: 'placeholder'
  data: { id: UUID }
}

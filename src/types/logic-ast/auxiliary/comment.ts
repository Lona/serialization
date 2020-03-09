export type Comment = {
  id: string
  string: string
}

export type CommentNode = {
  type: 'comment'
  data: Comment
}

import visit from 'unist-util-visit'

import * as MDAST from '../types/mdx-ast'
import { SERIALIZATION_FORMAT } from '../format'
import { convertLogic } from '../logic'

export default function parseTokens(src: string, filePath?: string) {
  return (ast: MDAST.Root) => {
    visit(ast, 'code', (node: MDAST.Code) => {
      if (node.lang === 'tokens') {
        // get the position of the node
        const pre = src.split(node.value)[0]
        const offset = pre.split('\n').length - 1

        node.parsed = JSON.parse(
          convertLogic(node.value, SERIALIZATION_FORMAT.JSON, {
            filePath,
            offset,
          })
        )
      }
      return node
    })
    return ast
  }
}

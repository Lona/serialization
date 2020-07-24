import stringify from 'json-stable-stringify'
import { v4 as uuid } from 'uuid'
import { decodeDocument } from './document'
import { normalizeFormat, SERIALIZATION_FORMAT } from './format'
import * as LogicAST from './ast/logicAst'
import * as MDXAST from './ast/documentAst'
import { rng } from './utils'

export function extractProgramFromAST(ast: { children: MDXAST.Content[] }) {
  const { children } = ast

  const declarations = children
    .filter(MDXAST.isLonaTokens)
    // Get Logic syntax node
    .map(child => child.data.parsed)
    // Get declarations
    .map(node => node.data.declarations)

  const flattened = declarations.reduce((prev, x) => prev.concat(x), [])

  const topLevelDeclarations: LogicAST.TopLevelDeclarations = {
    data: {
      declarations: flattened,
      id: uuid({ rng }).toUpperCase(),
    },
    type: 'topLevelDeclarations',
  }

  return topLevelDeclarations
}

export function extractProgram(
  contents: string,
  options: { sourceFormat?: SERIALIZATION_FORMAT } = {}
) {
  const sourceFormat = normalizeFormat(contents, options.sourceFormat)

  const ast = decodeDocument(contents, sourceFormat)

  const program = extractProgramFromAST(ast)

  return stringify(program, { space: '  ' })
}

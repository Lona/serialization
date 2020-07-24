import * as AST from './ast/logicAst'
import * as LogicJSON from './formats/json'
import * as LogicSource from './formats/source'
import { normalizeFormat, SERIALIZATION_FORMAT } from './format'
import { parsingError } from './utils'

export function decodeLogic(
  contents: string,
  format?: SERIALIZATION_FORMAT,
  options: { filePath?: string; offset?: number } = {}
) {
  const sourceFormat = normalizeFormat(contents, format)
  try {
    switch (sourceFormat) {
      case SERIALIZATION_FORMAT.JSON:
        return LogicJSON.parse(contents)
      case SERIALIZATION_FORMAT.SOURCE:
        return LogicSource.parse(contents)
      default:
        throw new Error(`Unknown decoding format ${sourceFormat}`)
    }
  } catch (e) {
    if (e.name === 'SyntaxError' && e.location) {
      // that's a pegjs error, let's format it nicely
      throw parsingError(contents, e, options)
    }
    throw new Error(`Failed to decode logic as ${sourceFormat}.\n\n${e}`)
  }
}

export function encodeLogic(ast: AST.SyntaxNode, format: SERIALIZATION_FORMAT) {
  try {
    switch (format) {
      case SERIALIZATION_FORMAT.JSON:
        return LogicJSON.print(ast)
      case SERIALIZATION_FORMAT.SOURCE:
        return LogicSource.print(ast)
      default:
        throw new Error(`Unknown encoding format ${format}`)
    }
  } catch (e) {
    console.error(e)
    throw new Error(`Failed to encode logic as ${format}.\n\n${e}`)
  }
}

export function convertLogic(
  contents: string,
  targetFormat: SERIALIZATION_FORMAT,
  options: {
    sourceFormat?: SERIALIZATION_FORMAT
    filePath?: string
    offset?: number
  } = {}
) {
  const sourceFormat = normalizeFormat(contents, options.sourceFormat)

  if (sourceFormat === targetFormat) return contents

  const ast = decodeLogic(contents, sourceFormat, options)
  return encodeLogic(ast, targetFormat)
}

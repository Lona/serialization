import stringify from 'json-stable-stringify'
import { normalizeFormat, SERIALIZATION_FORMAT } from './format'
import * as mdx from './mdx'
import * as MDXAST from './ast/documentAst'

export function decodeDocument(
  contents: string,
  format?: SERIALIZATION_FORMAT,
  filePath?: string
): { children: MDXAST.Content[] } {
  const sourceFormat = normalizeFormat(contents, format)
  try {
    switch (sourceFormat) {
      case SERIALIZATION_FORMAT.JSON:
        return JSON.parse(contents)
      case SERIALIZATION_FORMAT.SOURCE:
        return mdx.parse(contents, filePath)
      default:
        throw new Error(`Unknown decoding format ${sourceFormat}`)
    }
  } catch (e) {
    console.error(e)
    throw new Error(`Failed to decode document as ${sourceFormat}.\n\n${e}`)
  }
}

export function encodeDocument(
  ast: { children: MDXAST.Content[] },
  format: SERIALIZATION_FORMAT,
  options: {
    sourceFormat?: SERIALIZATION_FORMAT
    embeddedFormat?: SERIALIZATION_FORMAT
  } = {}
) {
  try {
    switch (format) {
      case SERIALIZATION_FORMAT.JSON:
        return stringify(ast, { space: '  ' })
      case SERIALIZATION_FORMAT.SOURCE:
        return mdx.print(ast, options)
      default:
        throw new Error(`Unknown encoding format ${format}`)
    }
  } catch (e) {
    console.error(e)
    throw new Error(`Failed to encode document as ${format}.\n\n${e}`)
  }
}

export function convertDocument(
  contents: string,
  targetFormat: SERIALIZATION_FORMAT,
  options: {
    sourceFormat?: SERIALIZATION_FORMAT
    embeddedFormat?: SERIALIZATION_FORMAT
    filePath?: string
  } = {}
) {
  const sourceFormat = normalizeFormat(contents, options.sourceFormat)

  if (sourceFormat === targetFormat && !options.embeddedFormat) return contents

  const ast = decodeDocument(contents, sourceFormat, options.filePath)
  return encodeDocument(ast, targetFormat, options)
}

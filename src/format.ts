export enum SERIALIZATION_FORMAT {
  JSON = 'json',
  SOURCE = 'source',
}

export function detectFormat(contents: string) {
  if (contents.startsWith('{') || contents.startsWith('[')) {
    return SERIALIZATION_FORMAT.JSON
  }
  return SERIALIZATION_FORMAT.SOURCE
}

export function normalizeFormat(
  contents: string,
  sourceFormat?: SERIALIZATION_FORMAT
) {
  const normalized = sourceFormat || detectFormat(contents)

  if (
    normalized !== SERIALIZATION_FORMAT.JSON &&
    normalized !== SERIALIZATION_FORMAT.SOURCE
  ) {
    throw new Error(
      `Invalid source serialization format specified: ${normalized}`
    )
  }

  return normalized
}

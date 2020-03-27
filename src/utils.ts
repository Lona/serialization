export function assertNever(x: never): never {
  throw new Error('Unknown type: ' + x['type'])
}

// Math.random()-based (RNG)
//
// when executing uuid in JSCore, we don't have access to Crypto,
// so it fails. Instead we will fallback to a Math.random RNG.
// We don't really care about enthropy so it's fine.
export function rng() {
  var rnds = new Array(16)
  for (var i = 0, r; i < 16; i++) {
    if ((i & 0x03) === 0) r = Math.random() * 0x100000000
    // @ts-ignore
    rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff
  }

  return rnds
}

function printLine(
  lines: string[],
  i: number,
  offset: number,
  maxLineStringWidth: number,
  selected?: boolean
) {
  if (i - 1 < 0 || i - 1 >= lines.length) {
    return ''
  }

  return `${selected ? '>' : ' '} ${String(i + offset).padEnd(
    maxLineStringWidth,
    ' '
  )} | ${lines[i - 1]}
`
}

export function parsingError(
  contents: string,
  e: any,
  options: { filePath?: string; offset?: number } = {}
) {
  const lines = contents.split('\n')
  const offset = options.offset || 0
  const maxLineStringWidth = ('' + (e.location.start.line + 2 + offset)).length
  return new Error(`Unable to parse Logic:
${options.filePath || '/'}:${e.location.start.line + offset}:${
    e.location.start.column
  } - error: ${e.message}

${printLine(
  lines,
  e.location.start.line - 2,
  offset,
  maxLineStringWidth
)}${printLine(
    lines,
    e.location.start.line - 1,
    offset,
    maxLineStringWidth
  )}${printLine(
    lines,
    e.location.start.line,
    offset,
    maxLineStringWidth,
    true
  )}  ${''.padEnd(maxLineStringWidth, ' ')} | ${' '.repeat(
    e.location.start.column - 1
  )}^
${printLine(
  lines,
  e.location.start.line + 1,
  offset,
  maxLineStringWidth
)}${printLine(lines, e.location.start.line + 2, offset, maxLineStringWidth)}`)
}

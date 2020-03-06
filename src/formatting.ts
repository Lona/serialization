function repeat(s: string, x: number) {
  let res = ''
  for (let i = 0; i < x; i++) {
    res += s
  }
  return res
}

export function indentLine(line: string, indent: string) {
  return line ? indent + line : line
}

export function indentLines(lines: string[], indent: string) {
  return lines.map(line => indentLine(line, indent))
}

export function indentBlock(codeblock: string, indent: number) {
  return indentLines(codeblock.split('\n'), repeat(' ', indent)).join('\n')
}

export function indentBlockWithFirstLinePrefix(
  codeblock: string,
  prefix: string
) {
  const lines = codeblock.split('\n')
  return [
    prefix + lines[0],
    ...indentLines(lines.slice(1), repeat(' ', prefix.length)),
  ].join('\n')
}

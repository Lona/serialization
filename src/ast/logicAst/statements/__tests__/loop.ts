import { print } from '../../../../formats/source/print'
import { parse } from '../../../../formats/source/parse'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('loop statement', () => {
  const codeExamples = [
    `while Boolean.and(a: x, b: y) {
  print(text: z)
}`,
  ]

  codeExamples.forEach((code, i) =>
    test(`Example ${i + 1}`, () => {
      const ast = parse(code, { startRule: 'statement' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})

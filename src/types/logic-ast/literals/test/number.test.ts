import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('number literal', () => {
  const codeExamples = [`1`, `0.1`, `-1`]

  codeExamples.forEach((code, i) =>
    test(`Example ${i + 1}`, () => {
      const ast = parse(code, { startRule: 'expression' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})

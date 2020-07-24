import { print } from '../../../../formats/source/print'
import { parse } from '../../../../formats/source/parse'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('member expression', () => {
  const codeExamples = [`Colors.primary`]

  codeExamples.forEach((code, i) =>
    test(`Example ${i + 1}`, () => {
      const ast = parse(code, { startRule: 'expression' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})

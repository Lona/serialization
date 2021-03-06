import { print } from '../../../../formats/source/print'
import { parse } from '../../../../formats/source/parse'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('enumeration declaration', () => {
  const codeExamples = [
    `func add<T>(a: T, b: T = 0) -> T {}`,
    `func add<T>(a: T, b: T = 0) -> T {
  print(text: a)
}`,
    `func add() -> T {}`,
  ]

  codeExamples.forEach((code, i) =>
    test(`Example ${i + 1}`, () => {
      const ast = parse(code, { startRule: 'declaration' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})

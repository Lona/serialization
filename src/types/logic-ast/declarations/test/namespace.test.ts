import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('namespace declaration', () => {
  const codeExamples = [
    `enum Boolean {
  func or(a: Boolean, b: Boolean): Boolean {

  }
  func and(a: Boolean, b: Boolean): Boolean {

  }
}`,
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

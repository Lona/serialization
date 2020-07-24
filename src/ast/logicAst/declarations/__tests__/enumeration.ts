import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('enumeration declaration', () => {
  const codeExamples = [
    `enum Optional<Wrapped> {
  case value(Wrapped)
  case none()
}`,
    `enum Foo {
  case bar(Number, String)
  case baz(label1: Number, label2: String)
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

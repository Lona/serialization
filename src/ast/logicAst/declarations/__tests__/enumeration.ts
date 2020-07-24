import { print } from '../../../../formats/source/print'
import { parse } from '../../../../formats/source/parse'

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
    `@attr()
enum A {
  case b()
}`,
    `@attr(c: 42, d: "hello")
enum A {
  case b()
}`,
    `@attr1()
@attr2()
enum A {
  case b()
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

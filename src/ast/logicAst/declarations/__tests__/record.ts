import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('record declaration', () => {
  const codeExamples = [
    `struct ThemedColor {
  let light: Color = #color(css: "white")
  let dark: Color = #color(css: "black")
}`,
    `@attr1()
struct A {
  let b: String = ""
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

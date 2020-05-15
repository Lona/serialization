import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('branch statement', () => {
  const codeExamples = [
    `if Boolean.and(a: x, b: y) {
  print(text: z)
}`,
    `if case Optional<Number>.value(42) = wrapped {
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

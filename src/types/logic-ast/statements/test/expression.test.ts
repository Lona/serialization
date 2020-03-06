import { parse, print } from '../../../../convert/swift/logic'

const generateId = () => '0'

jest.mock('uuid/v4', () => () => `0`)

describe('expression statement', () => {
  const codeExamples = [`x`]

  codeExamples.forEach((code, i) =>
    test(`Example ${i}`, () => {
      const ast = parse(code, { generateId, startRule: 'statement' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})
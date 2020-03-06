import { parse, print } from '../../../../convert/swift/logic'

const generateId = () => '0'

jest.mock('uuid/v4', () => () => `0`)

describe('declaration statement', () => {
  const codeExamples = [`let x: Number = 10`]

  codeExamples.forEach((code, i) =>
    test(`Example ${i}`, () => {
      const ast = parse(code, { generateId, startRule: 'statement' })
      expect(ast).toMatchSnapshot()

      const converted = print(ast)
      expect(converted).toBe(code)
    })
  )
})

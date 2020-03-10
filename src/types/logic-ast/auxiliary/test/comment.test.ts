import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('comments', () => {
  const codeExamples = [
    `/*
 * comment for the function
 * on multiple line
 */
func and(a: Boolean, b: Boolean): Boolean {}`,
    `/*
 * comment for the function
 * on multiple line
 *
 * @param a - comment for the parameter
 */
func and(a: Boolean, b: Boolean): Boolean {}`,
    `/*
 * comment for the function
 * on multiple line
 *
 * @param a - multiline comment for the parameter
 *            which continues here
 * @param b - another comment
 */
func and(a: Boolean, b: Boolean): Boolean {}`,
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

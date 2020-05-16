import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('condition', () => {
  const parserOptions = { startRule: 'condition' }

  it('expression condition', () => {
    const code = `a`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })

  it('case condition', () => {
    const code = `case Test.value(x) = y`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })

  describe('invalid case condition', () => {
    it('missing parentheses', () => {
      const code = `case Test.value = y`
      expect(() => parse(code, parserOptions)).toThrow()
    })

    it('missing type identifier', () => {
      const code = `case .value = y`
      expect(() => parse(code, parserOptions)).toThrow()
    })

    it('missing initializer', () => {
      const code = `case Test.value`
      expect(() => parse(code, parserOptions)).toThrow()
    })
  })
})

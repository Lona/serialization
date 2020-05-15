import { parse, print } from '../../../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('pattern', () => {
  const parserOptions = { startRule: 'pattern' }

  it('identifier pattern', () => {
    const code = `a`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })

  it('tuple pattern', () => {
    const code = `(a, b)`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })

  it('enumeration case pattern', () => {
    const code = `Optional<Number>.value(x)`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })

  it('value binding pattern', () => {
    const code = `Test.value(let x)`
    const ast = parse(code, parserOptions)
    expect(ast).toMatchSnapshot()
    expect(print(ast)).toBe(code)
  })
})

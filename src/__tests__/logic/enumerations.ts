import {
  parse as parseSwift,
  print as printSwift,
} from '../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

it('converts enumerations', () => {
  const inputSource = `enum Foo {
  case bar(Number, String)
  case baz(label1: Number, label2: String)
}`

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

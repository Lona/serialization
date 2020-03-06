/* eslint-disable import/no-unresolved */
import {
  parse as parseSwift,
  print as printSwift,
} from '../../src/convert/swift/logic'

jest.mock('uuid/v4', () => () => `0`)

describe('colors file', () => {
  const { json, code } = require('./mocks/files/colors')

  test('code -> json', () => {
    const converted = parseSwift(code, {
      generateId: () => '0',
      startRule: 'program',
    })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

describe('top level declarations', () => {
  const { json, code } = require('./mocks/files/topLevelDeclarations')

  test('code -> json', () => {
    const converted = parseSwift(code, { generateId: () => '0' })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

describe('prelude', () => {
  const { json, code } = require('./mocks/files/prelude')

  test('code -> json', () => {
    const converted = parseSwift(code, {
      generateId: () => '0',
      startRule: 'program',
    })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

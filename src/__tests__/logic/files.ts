/* eslint-disable import/no-unresolved */
import {
  parse as parseSwift,
  print as printSwift,
} from '../../convert/swift/logic'

jest.mock('uuid', () => ({ v4: () => '0' }))

describe('colors file', () => {
  const { json, code } = require('./mocks/files/colors')

  test('code -> json', () => {
    const converted = parseSwift(code, {
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
    const converted = parseSwift(code)
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
      startRule: 'program',
    })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

describe('shadow', () => {
  const { json, code } = require('./mocks/files/shadow')

  test('code -> json', () => {
    const converted = parseSwift(code, {
      startRule: 'topLevelDeclarations',
    })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

describe('text style', () => {
  const { json, code } = require('./mocks/files/textStyle')

  test('code -> json', () => {
    const converted = parseSwift(code, {
      startRule: 'topLevelDeclarations',
    })
    expect(converted).toStrictEqual(json)
  })

  test('json -> code', () => {
    const converted = printSwift(json)
    expect(converted).toBe(code)
  })
})

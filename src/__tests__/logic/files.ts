/* eslint-disable import/no-unresolved */
import fs from 'fs'
import path from 'path'
import { print as printSwift } from '../../formats/source/print'
import { parse as parseSwift } from '../../formats/source/parse'

jest.mock('uuid', () => ({ v4: () => '0' }))

it('top level declarations', () => {
  const inputSource = `import Prelude

let x: Number = 123

extension Test {
  static let b: Boolean = false
}`

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

it('converts colors file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Color.logic'),
    'utf8'
  )

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

it('converts prelude file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Prelude.logic'),
    'utf8'
  )

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

it('converts text style file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/TextStyle.logic'),
    'utf8'
  )

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

it('converts shadow file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Shadow.logic'),
    'utf8'
  )

  const json = parseSwift(inputSource, {
    startRule: 'program',
  })

  expect(json).toMatchSnapshot()

  const source = printSwift(json)

  expect(source).toBe(inputSource)
})

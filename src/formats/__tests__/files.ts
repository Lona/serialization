import fs from 'fs'
import path from 'path'
import * as Source from '../../formats/source'

jest.mock('uuid', () => ({ v4: () => '0' }))

it('top level declarations', () => {
  const inputSource = `import Prelude

let x: Number = 123

extension Test {
  static let b: Boolean = false
}`

  const json = Source.parse(inputSource, { startRule: 'program' })

  expect(json).toMatchSnapshot()

  expect(Source.print(json)).toBe(inputSource)
})

it('converts colors file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Color.logic'),
    'utf8'
  )

  const json = Source.parse(inputSource, { startRule: 'program' })

  expect(json).toMatchSnapshot()

  expect(Source.print(json)).toBe(inputSource)
})

it('converts prelude file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Prelude.logic'),
    'utf8'
  )

  const json = Source.parse(inputSource, { startRule: 'program' })

  expect(json).toMatchSnapshot()

  expect(Source.print(json)).toBe(inputSource)
})

it('converts text style file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/TextStyle.logic'),
    'utf8'
  )

  const json = Source.parse(inputSource, { startRule: 'program' })

  expect(json).toMatchSnapshot()

  expect(Source.print(json)).toBe(inputSource)
})

it('converts shadow file', () => {
  const inputSource = fs.readFileSync(
    path.join(__dirname, './mocks/Shadow.logic'),
    'utf8'
  )

  const json = Source.parse(inputSource, { startRule: 'program' })

  expect(json).toMatchSnapshot()

  expect(Source.print(json)).toBe(inputSource)
})

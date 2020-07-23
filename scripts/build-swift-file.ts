/**
 * Concatenate all the swift files.
 * The generated file is in /dist
 */
import * as fs from 'fs'
import * as path from 'path'

const rootPath = path.join(__dirname, '../src/ast/logicAst')
const outputPath = path.join(__dirname, '../dist')

fs.mkdirSync(outputPath, { recursive: true })

let content = `import Foundation

public protocol Equivalentable {
  func isEquivalentTo(_ node: Self) -> Bool
}

extension Optional: Equivalentable where Wrapped: Equivalentable {
  public func isEquivalentTo(_ node: Self) -> Bool {
    switch (self, node) {
    case (.none, .none):
        return true
    case (.some(let a), .some(let b)):
      return a.isEquivalentTo(b)
    default:
      return false
    }
  }
}`

function walk(dirPath: string) {
  const children = fs.readdirSync(dirPath)

  children.forEach(x => {
    if (fs.statSync(path.join(dirPath, x)).isDirectory()) {
      walk(path.join(dirPath, x))
    } else if (path.extname(x) === '.swift') {
      content += `\n\n${fs.readFileSync(path.join(dirPath, x), 'utf8')}`
    }
  })
}

walk(rootPath)

fs.writeFileSync(path.join(outputPath, 'LGCSyntax.swift'), content)

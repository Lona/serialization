import stringify from 'json-stable-stringify'
import Ajv from 'ajv'
import * as AST from '../../types/logic-ast'
import schema from './logic-schema.json'

export function print(ast: AST.SyntaxNode) {
  return stringify(ast, { space: '  ' })
}

export function parse(contents: string): AST.SyntaxNode {
  const ajv = new Ajv()
  const validate = ajv.compile(schema)
  const data = JSON.parse(contents)
  if (validate(data) && ajv.errors) {
    throw new Error(ajv.errors[0].message)
  }
  return data
}

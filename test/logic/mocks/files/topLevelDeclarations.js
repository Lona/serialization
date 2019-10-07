const xml = `<?xml version="1.0"?>
<Declarations>
  <ImportDeclaration name="Prelude"/>
  <Variable name="x" type="Number" value="123"/>
</Declarations>`

const json = {
  data: {
    declarations: [
      {
        data: {
          id: '0',
          name: {
            id: '0',
            name: 'Prelude',
          },
        },
        type: 'importDeclaration',
      },
      {
        data: {
          annotation: {
            data: {
              genericArguments: [],
              id: '0',
              identifier: {
                id: '0',
                isPlaceholder: false,
                string: 'Number',
              },
            },
            type: 'typeIdentifier',
          },
          id: '0',
          initializer: {
            data: {
              id: '0',
              literal: {
                data: {
                  id: '0',
                  value: 123,
                },
                type: 'number',
              },
            },
            type: 'literalExpression',
          },
          name: {
            id: '0',
            name: 'x',
          },
        },
        type: 'variable',
      },
      {
        data: {
          id: '0',
        },
        type: 'placeholder',
      },
    ],
    id: '0',
  },
  type: 'topLevelDeclarations',
}

const code = `import Prelude

let x: Number = 123`

module.exports = { json, xml, code }

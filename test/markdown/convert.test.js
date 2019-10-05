const { convertDocument } = require('../../lib/index')

describe('mdx <-> json', () => {
  const mdx = `# heading

a`

  const json = {
    children: [
      {
        type: 'heading',
        data: {
          depth: 1,
          children: [
            {
              type: 'text',
              data: {
                value: 'heading',
                children: [],
              },
            },
          ],
        },
      },
      {
        type: 'paragraph',
        data: {
          children: [
            {
              type: 'text',
              data: {
                value: 'a',
                children: [],
              },
            },
          ],
        },
      },
    ],
  }

  test('mdx -> json', () => {
    const convertedToJson = JSON.parse(
      convertDocument(mdx, 'json', { sourceFormat: 'mdx' })
    )

    expect(convertedToJson).toStrictEqual(json)
  })

  test('json -> mdx', () => {
    const convertedToMdx = convertDocument(JSON.stringify(json), 'mdx', {
      sourceFormat: 'json',
    })

    expect(convertedToMdx).toBe(mdx)
  })
})

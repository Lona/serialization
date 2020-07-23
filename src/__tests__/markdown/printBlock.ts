/* eslint-disable import/no-unresolved */
import { printMdxNode, MDXAST } from '../..'

test('prints a markdown block', () => {
  const json = {
    type: 'paragraph',
    data: {
      children: [
        {
          type: 'text',
          data: {
            value: 'a ',
          },
        },
        {
          type: 'strong',
          data: {
            children: [
              {
                type: 'text',
                data: {
                  value: 'b',
                },
              },
            ],
          },
        },
      ],
    },
  } as MDXAST.Content

  const mdx = printMdxNode(json)

  expect(mdx).toBe('a **b**')
})

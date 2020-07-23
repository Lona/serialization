/* eslint-disable import/no-unresolved */
import toMarkdown from '../../mdast-transforms/toMarkdown'
import * as MDAST from '../../types/mdx-ast'

const aParagraph = {
  type: 'paragraph',
  children: [
    {
      type: 'text',
      value: 'a',
    },
  ],
}

const bParagraph = {
  type: 'paragraph',
  children: [
    {
      type: 'text',
      value: 'b',
    },
  ],
}

const cParagraph = {
  type: 'paragraph',
  children: [
    {
      type: 'text',
      value: 'c',
    },
  ],
}

describe('convert mdast to markdown', () => {
  test('root', () => {
    const json = {
      type: 'root',
      children: [aParagraph],
    } as MDAST.Root

    const mdx = toMarkdown(json)

    expect(mdx).toBe('a')
  })

  test('string', () => {
    const json = {
      type: 'strong',
      children: [
        {
          type: 'text',
          value: 'a',
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('**a**')
  })

  test('emphasis', () => {
    const json = {
      type: 'emphasis',
      children: [
        {
          type: 'text',
          value: 'a',
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('_a_')
  })

  test('inline code', () => {
    const json = {
      type: 'inlineCode',
      value: 'a',
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('`a`')
  })

  test('paragraph', () => {
    const json = {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value: 'a ',
        },
        {
          type: 'strong',
          children: [
            {
              type: 'text',
              value: 'b',
            },
          ],
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('a **b**')
  })

  test('heading', () => {
    const json = {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'a',
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('## a')
  })

  test('image', () => {
    const json = {
      type: 'image',
      alt: 'alt',
      url: 'url',
      children: [],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('![alt](url)')
  })

  test('link', () => {
    const json = {
      type: 'link',
      url: 'url',
      children: [
        {
          type: 'text',
          value: 'a',
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('[a](url)')
  })

  test('thematicBreak', () => {
    const json = {
      type: 'thematicBreak',
      children: [],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('---')
  })

  test('blockquote', () => {
    const json = {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'a',
            },
          ],
        },
      ],
    } as MDAST.Blockquote

    const mdx = toMarkdown(json)

    expect(mdx).toBe('> a')
  })

  test('blockquote with break', () => {
    const json = {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'a',
            },
            {
              type: 'break',
            },
            {
              type: 'text',
              value: 'b',
            },
          ],
        },
      ],
    } as MDAST.Blockquote

    const mdx = toMarkdown(json)

    expect(mdx).toBe('> a  \n> b')
  })

  test('unordered list', () => {
    const json = {
      type: 'list',
      spread: false,
      ordered: false,
      children: [
        {
          type: 'listItem',
          children: [aParagraph],
        },
        {
          type: 'listItem',
          children: [bParagraph],
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('- a\n- b')
  })

  test('unordered list with multiple block children', () => {
    const json = {
      type: 'list',
      spread: false,
      ordered: false,
      children: [
        {
          type: 'listItem',
          children: [aParagraph, bParagraph],
        },
        {
          type: 'listItem',
          children: [bParagraph],
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('- a\n\n  b\n- b')
  })

  test('unordered nested list', () => {
    const json = {
      type: 'list',
      spread: false,
      ordered: false,
      children: [
        {
          type: 'listItem',
          children: [
            aParagraph,
            {
              type: 'list',
              spread: false,
              ordered: false,
              children: [
                {
                  type: 'listItem',
                  children: [bParagraph],
                },
                {
                  type: 'listItem',
                  children: [cParagraph],
                },
              ],
            },
          ],
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('- a\n\n  - b\n  - c')
  })

  test('ordered list', () => {
    const json = {
      type: 'list',
      ordered: true,
      spread: false,
      children: [
        {
          type: 'listItem',
          children: [aParagraph],
        },
        {
          type: 'listItem',
          children: [bParagraph],
        },
      ],
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe('1. a\n2. b')
  })

  test('page', () => {
    const json = {
      type: 'link',
      url: 'child.md',
      children: [{ type: 'text', value: 'child' }],
      page: true,
    } as MDAST.Content

    const mdx = toMarkdown(json)

    expect(mdx).toBe(`<a class="page" href="child.md">child</a>`)
  })
})

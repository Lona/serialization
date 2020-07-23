const code = `import Prelude

import Color

/*
 * I> Press enter to create a new shadow.
 *
 * # Shadow
 *
 * A drop shadow definition.
 */
struct Shadow {
  /*
   * # x
   *
   * The horizontal offset of the shadow.
   */
  let x: Number = 0
  /*
   * # y
   *
   * The vertical of the shadow.
   */
  let y: Number = 0
  /*
   * # Blur
   *
   * The blur radius of the shadow.
   */
  let blur: Number = 0
  /*
   * W> This property is not supported on iOS or Android.
   *
   * # Radius
   *
   * The spread radius of the shadow.
   */
  let radius: Number = 0
  /*
   * # Color
   *
   * The shadow color.
   */
  let color: Color = #color(css: "black")
}`

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
          id: '0',
          name: {
            id: '0',
            name: 'Color',
          },
        },
        type: 'importDeclaration',
      },
      {
        data: {
          comment: {
            id: '0',
            string:
              'I> Press enter to create a new shadow.\n\n# Shadow\n\nA drop shadow definition.',
          },
          declarations: [
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
                comment: {
                  id: '0',
                  string: '# x\n\nThe horizontal offset of the shadow.',
                },
                id: '0',
                initializer: {
                  data: {
                    id: '0',
                    literal: {
                      data: {
                        id: '0',
                        value: 0,
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
                comment: {
                  id: '0',
                  string: '# y\n\nThe vertical of the shadow.',
                },
                id: '0',
                initializer: {
                  data: {
                    id: '0',
                    literal: {
                      data: {
                        id: '0',
                        value: 0,
                      },
                      type: 'number',
                    },
                  },
                  type: 'literalExpression',
                },
                name: {
                  id: '0',
                  name: 'y',
                },
              },
              type: 'variable',
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
                comment: {
                  id: '0',
                  string: '# Blur\n\nThe blur radius of the shadow.',
                },
                id: '0',
                initializer: {
                  data: {
                    id: '0',
                    literal: {
                      data: {
                        id: '0',
                        value: 0,
                      },
                      type: 'number',
                    },
                  },
                  type: 'literalExpression',
                },
                name: {
                  id: '0',
                  name: 'blur',
                },
              },
              type: 'variable',
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
                comment: {
                  id: '0',
                  string:
                    'W> This property is not supported on iOS or Android.\n\n# Radius\n\nThe spread radius of the shadow.',
                },
                id: '0',
                initializer: {
                  data: {
                    id: '0',
                    literal: {
                      data: {
                        id: '0',
                        value: 0,
                      },
                      type: 'number',
                    },
                  },
                  type: 'literalExpression',
                },
                name: {
                  id: '0',
                  name: 'radius',
                },
              },
              type: 'variable',
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
                      string: 'Color',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string: '# Color\n\nThe shadow color.',
                },
                id: '0',
                initializer: {
                  data: {
                    id: '0',
                    literal: {
                      data: {
                        id: '0',
                        value: 'black',
                      },
                      type: 'color',
                    },
                  },
                  type: 'literalExpression',
                },
                name: {
                  id: '0',
                  name: 'color',
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
          genericParameters: [
            {
              data: {
                id: '0',
              },
              type: 'placeholder',
            },
          ],
          id: '0',
          name: {
            id: '0',
            name: 'Shadow',
          },
        },
        type: 'record',
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

module.exports = { json, code }

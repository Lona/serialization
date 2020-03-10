const code = `import Prelude

/*
 * # Color
 *
 * A color value. Colors can be defined using CSS color codes.
 *
 * ## Example
 *
 * We might declare a color variable, \`ocean\` to use throughout our design system to represent the hex code \`#69D2E7\`:
 *
 * \`\`\`logic
 * <Declarations>
 *   <Variable name="ocean" type="Color" value="#69D2E7"/>
 * </Declarations>
 * \`\`\`
 */
struct Color {
  let value: String = ""
}

extension Color {
  func setHue(color: Color, hue: Number): Color {}
  /*
   * # Set Saturation
   *
   * Adjust the saturation of a color.
   *
   * @param color - # Color
   *
   *                The base color to adjust.
   */
  func setSaturation(color: Color, saturation: Number): Color {}
  func setLightness(color: Color, lightness: Number): Color {}
  func fromHSL(hue: Number, saturation: Number, lightness: Number): Color {}
  /*
   * # Saturate
   *
   * Adjust color saturation.
   *
   * @param color - # Color
   *
   *                The base color to adjust.
   * @param factor - # Factor
   *
   *                 This value will be multiplied with the current saturation value.
   */
  func saturate(color: Color, factor: Number): Color {}
}`

const json = {
  data: {
    block: [
      {
        data: {
          content: {
            data: {
              id: '0',
              name: {
                id: '0',
                name: 'Prelude',
              },
            },
            type: 'importDeclaration',
          },
          id: '0',
        },
        type: 'declaration',
      },
      {
        data: {
          content: {
            data: {
              comment: {
                id: '0',
                string:
                  '# Color\n\nA color value. Colors can be defined using CSS color codes.\n\n## Example\n\nWe might declare a color variable, `ocean` to use throughout our design system to represent the hex code `#69D2E7`:\n\n```logic\n<Declarations>\n  <Variable name="ocean" type="Color" value="#69D2E7"/>\n</Declarations>\n```',
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
                          string: 'String',
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
                            value: '',
                          },
                          type: 'string',
                        },
                      },
                      type: 'literalExpression',
                    },
                    name: {
                      id: '0',
                      name: 'value',
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
                name: 'Color',
              },
            },
            type: 'record',
          },
          id: '0',
        },
        type: 'declaration',
      },
      {
        data: {
          content: {
            data: {
              declarations: [
                {
                  data: {
                    block: [
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
                      name: 'setHue',
                    },
                    parameters: [
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'color',
                          },
                        },
                        type: 'parameter',
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'hue',
                          },
                        },
                        type: 'parameter',
                      },
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    returnType: {
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
                  },
                  type: 'function',
                },
                {
                  data: {
                    block: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    comment: {
                      id: '0',
                      string:
                        '# Set Saturation\n\nAdjust the saturation of a color.',
                    },
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
                      name: 'setSaturation',
                    },
                    parameters: [
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
                            string: '# Color\n\nThe base color to adjust.',
                          },
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'color',
                          },
                        },
                        type: 'parameter',
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'saturation',
                          },
                        },
                        type: 'parameter',
                      },
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    returnType: {
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
                  },
                  type: 'function',
                },
                {
                  data: {
                    block: [
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
                      name: 'setLightness',
                    },
                    parameters: [
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'color',
                          },
                        },
                        type: 'parameter',
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'lightness',
                          },
                        },
                        type: 'parameter',
                      },
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    returnType: {
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
                  },
                  type: 'function',
                },
                {
                  data: {
                    block: [
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
                      name: 'fromHSL',
                    },
                    parameters: [
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'hue',
                          },
                        },
                        type: 'parameter',
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'saturation',
                          },
                        },
                        type: 'parameter',
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
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'lightness',
                          },
                        },
                        type: 'parameter',
                      },
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    returnType: {
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
                  },
                  type: 'function',
                },
                {
                  data: {
                    block: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    comment: {
                      id: '0',
                      string: '# Saturate\n\nAdjust color saturation.',
                    },
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
                      name: 'saturate',
                    },
                    parameters: [
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
                            string: '# Color\n\nThe base color to adjust.',
                          },
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'color',
                          },
                        },
                        type: 'parameter',
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
                              '# Factor\n\nThis value will be multiplied with the current saturation value.',
                          },
                          defaultValue: {
                            data: {
                              id: '0',
                            },
                            type: 'none',
                          },
                          id: '0',
                          localName: {
                            id: '0',
                            name: 'factor',
                          },
                        },
                        type: 'parameter',
                      },
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    returnType: {
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
                  },
                  type: 'function',
                },
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
                name: 'Color',
              },
            },
            type: 'namespace',
          },
          id: '0',
        },
        type: 'declaration',
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
  type: 'program',
}

module.exports = { json, code }

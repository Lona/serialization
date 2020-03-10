const code = `import Prelude

import Color

/*
 * # Font Weight
 *
 * Font thickness.
 *
 * An individual font may support multiple weights. However, specifying a weight that isn't supported will generally result in the **regular (400)** weight being displayed.
 */
enum FontWeight {
  /*
   * # Ultra Light
   *
   * The lightest font weight, representing **100**.
   */
  case ultraLight()
  /*
   * # Thin
   *
   * A font weight, representing **200**.
   */
  case thin()
  /*
   * # Light
   *
   * A font weight, representing **300**.
   */
  case light()
  /*
   * # Regular
   *
   * A font weight, representing **400**.
   */
  case regular()
  /*
   * # Medium
   *
   * A font weight, representing **500**.
   */
  case medium()
  /*
   * # Semibold
   *
   * A font weight, representing **600**.
   */
  case semibold()
  /*
   * # Bold
   *
   * A font weight, representing **700**.
   */
  case bold()
  /*
   * # Heavy
   *
   * A font weight, representing **800**.
   */
  case heavy()
  /*
   * # Black
   *
   * The heaviest font weight, representing **900**.
   */
  case black()
}

extension FontWeight {
  static let w100: FontWeight = FontWeight.ultraLight()
  static let w200: FontWeight = FontWeight.thin()
  static let w300: FontWeight = FontWeight.light()
  static let w400: FontWeight = FontWeight.regular()
  static let w500: FontWeight = FontWeight.medium()
  static let w600: FontWeight = FontWeight.semibold()
  static let w700: FontWeight = FontWeight.bold()
  static let w800: FontWeight = FontWeight.heavy()
  static let w900: FontWeight = FontWeight.black()
}

/*
 * I> Press enter to create a new Text Style.
 *
 * # Text Style
 *
 * This represents a specific configuration of text parameters such as font and color.
 */
struct TextStyle {
  /*
   * W> This parameter is not supported on the web.
   *
   * # Font Name
   *
   * The exact name of a font file, e.g. "Helvetica-Oblique". Generally, you should use the \`fontFamily\` parameter where possible instead.
   */
  let fontName: Optional<String> = Optional.none()
  /*
   * # Font Family
   *
   * The family name of the font - for example, "Times" or "Helvetica."
   */
  let fontFamily: Optional<String> = Optional.none()
  /*
   * # Font Weight
   *
   * The thickness of a font, ranging from \`black\` to \`ultraLight\`. The default value is \`regular\`.
   */
  let fontWeight: FontWeight = FontWeight.regular()
  /*
   * # Font Size
   *
   * The size of the font, measured in pixels.
   */
  let fontSize: Optional<Number> = Optional.none()
  /*
   * # Line Height
   *
   * The line height, measured in pixels. The default is \`none\`, in which case the text style will default to the system-calculated line height.
   */
  let lineHeight: Optional<Number> = Optional.none()
  /*
   * # Letter Spacing
   *
   * Increase or decrease the kerning (spacing between characters). The default is \`none\`, which uses the font's built-in kerning.
   */
  let letterSpacing: Optional<Number> = Optional.none()
  /*
   * # Color
   *
   * The color of the text.
   */
  let color: Optional<Color> = Optional.none()
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
          cases: [
            {
              data: {
                associatedValueTypes: [
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
                    '# Ultra Light\n\nThe lightest font weight, representing **100**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'ultraLight',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Thin\n\nA font weight, representing **200**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'thin',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Light\n\nA font weight, representing **300**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'light',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Regular\n\nA font weight, representing **400**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'regular',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Medium\n\nA font weight, representing **500**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'medium',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Semibold\n\nA font weight, representing **600**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'semibold',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Bold\n\nA font weight, representing **700**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'bold',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
                  {
                    data: {
                      id: '0',
                    },
                    type: 'placeholder',
                  },
                ],
                comment: {
                  id: '0',
                  string: '# Heavy\n\nA font weight, representing **800**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'heavy',
                },
              },
              type: 'enumerationCase',
            },
            {
              data: {
                associatedValueTypes: [
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
                    '# Black\n\nThe heaviest font weight, representing **900**.',
                },
                id: '0',
                name: {
                  id: '0',
                  name: 'black',
                },
              },
              type: 'enumerationCase',
            },
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
              "# Font Weight\n\nFont thickness.\n\nAn individual font may support multiple weights. However, specifying a weight that isn't supported will generally result in the **regular (400)** weight being displayed.",
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
            name: 'FontWeight',
          },
        },
        type: 'enumeration',
      },
      {
        data: {
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'ultraLight',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w100',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'thin',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w200',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'light',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w300',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'regular',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w400',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'medium',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w500',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'semibold',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w600',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'bold',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w700',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'heavy',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w800',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'black',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'w900',
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
          name: {
            id: '0',
            name: 'FontWeight',
          },
        },
        type: 'namespace',
      },
      {
        data: {
          comment: {
            id: '0',
            string:
              'I> Press enter to create a new Text Style.\n\n# Text Style\n\nThis represents a specific configuration of text parameters such as font and color.',
          },
          declarations: [
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    'W> This parameter is not supported on the web.\n\n# Font Name\n\nThe exact name of a font file, e.g. "Helvetica-Oblique". Generally, you should use the `fontFamily` parameter where possible instead.',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'fontName',
                },
              },
              type: 'variable',
            },
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    '# Font Family\n\nThe family name of the font - for example, "Times" or "Helvetica."',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'fontFamily',
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
                      string: 'FontWeight',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    '# Font Weight\n\nThe thickness of a font, ranging from `black` to `ultraLight`. The default value is `regular`.',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'FontWeight',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'regular',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'fontWeight',
                },
              },
              type: 'variable',
            },
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    '# Font Size\n\nThe size of the font, measured in pixels.',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'fontSize',
                },
              },
              type: 'variable',
            },
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    '# Line Height\n\nThe line height, measured in pixels. The default is `none`, in which case the text style will default to the system-calculated line height.',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'lineHeight',
                },
              },
              type: 'variable',
            },
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string:
                    "# Letter Spacing\n\nIncrease or decrease the kerning (spacing between characters). The default is `none`, which uses the font's built-in kerning.",
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
                },
                name: {
                  id: '0',
                  name: 'letterSpacing',
                },
              },
              type: 'variable',
            },
            {
              data: {
                annotation: {
                  data: {
                    genericArguments: [
                      {
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
                    ],
                    id: '0',
                    identifier: {
                      id: '0',
                      isPlaceholder: false,
                      string: 'Optional',
                    },
                  },
                  type: 'typeIdentifier',
                },
                comment: {
                  id: '0',
                  string: '# Color\n\nThe color of the text.',
                },
                id: '0',
                initializer: {
                  data: {
                    arguments: [
                      {
                        data: {
                          id: '0',
                        },
                        type: 'placeholder',
                      },
                    ],
                    expression: {
                      data: {
                        expression: {
                          data: {
                            id: '0',
                            identifier: {
                              id: '0',
                              isPlaceholder: false,
                              string: 'Optional',
                            },
                          },
                          type: 'identifierExpression',
                        },
                        id: '0',
                        memberName: {
                          id: '0',
                          isPlaceholder: false,
                          string: 'none',
                        },
                      },
                      type: 'memberExpression',
                    },
                    id: '0',
                  },
                  type: 'functionCallExpression',
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
            name: 'TextStyle',
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

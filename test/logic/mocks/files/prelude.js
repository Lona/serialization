const code = `/*
 * # Boolean
 *
 * A type that represents \`true\` and \`false\` values.
 *
 * Booleans are frequently used to represent things that can be in only 2 states: **on/off**, **enabled/disabled**, **yes/no**, etc.
 */
struct Boolean {

}

extension Boolean {
  func or(a: Boolean, b: Boolean): Boolean {}
  func and(a: Boolean, b: Boolean): Boolean {}
}

/*
 * # Number
 *
 * A rational number. This can be a whole number, like \`42\`, or a decimal number, like \`3.14\`.
 *
 * This number is represented internally as a floating point number.
 *
 * ## Example
 *
 * We can declare a number variable to use elsewhere in our app:
 *
 * \`\`\`logic
 * <Declarations>
 *   <Variable name="padding" type="Number" value="12"/>
 * </Declarations>
 * \`\`\`
 *
 * ## Generating Code
 *
 * This will be converted to a **CGFloat** in Swift.
 */
struct Number {

}

extension Number {
  /*
   * # Range
   *
   * Create an array of numbers from \`from\` to \`to\`.
   *
   * The numbers will be created by starting at \`from\` and adding the \`by\` value repeatedly until it is greater than or equal to \`to\`.
   */
  func range(from: Number, to: Number, by: Number): Array<Number> {}
}

/*
 * # String
 *
 * A \`String\` is a sequence of characters, such as \`h\` or \`e\`, put together to form text such as \`hello\`.
 *
 * ## Example
 *
 * We might want to declare a greeting variable as a \`String\`:
 *
 * \`\`\`logic
 * <Declarations>
 *   <Variable name="greeting" type="String" value="Hello, world"/>
 * </Declarations>
 * \`\`\`
 */
struct String {

}

extension String {
  func concat(a: String, b: String): String {}
}

/*
 * # Array
 *
 * A generic type representing a sequence of elements. Each element must be the same type.
 */
struct Array<Element> {

}

extension Array {
  func at<T>(array: Array<T>, index: Number): T {}
}

/*
 * # Optional
 *
 * A generic type representing a value that may or may not exist.
 */
enum Optional<Wrapped> {
  case value(Wrapped)
  case none()
}`

const json = {
  data: {
    block: [
      {
        data: {
          content: {
            data: {
              comment: {
                id: '0',
                string:
                  '# Boolean\n\nA type that represents `true` and `false` values.\n\nBooleans are frequently used to represent things that can be in only 2 states: **on/off**, **enabled/disabled**, **yes/no**, etc.',
              },
              declarations: [
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
                name: 'Boolean',
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
                      name: 'or',
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
                                string: 'Boolean',
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
                            name: 'a',
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
                                string: 'Boolean',
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
                            name: 'b',
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
                          string: 'Boolean',
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
                      name: 'and',
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
                                string: 'Boolean',
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
                            name: 'a',
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
                                string: 'Boolean',
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
                            name: 'b',
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
                          string: 'Boolean',
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
                name: 'Boolean',
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
          content: {
            data: {
              comment: {
                id: '0',
                string:
                  '# Number\n\nA rational number. This can be a whole number, like `42`, or a decimal number, like `3.14`.\n\nThis number is represented internally as a floating point number.\n\n## Example\n\nWe can declare a number variable to use elsewhere in our app:\n\n```logic\n<Declarations>\n  <Variable name="padding" type="Number" value="12"/>\n</Declarations>\n```\n\n## Generating Code\n\nThis will be converted to a **CGFloat** in Swift.',
              },
              declarations: [
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
                name: 'Number',
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
                    comment: {
                      id: '0',
                      string:
                        '# Range\n\nCreate an array of numbers from `from` to `to`.\n\nThe numbers will be created by starting at `from` and adding the `by` value repeatedly until it is greater than or equal to `to`.',
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
                      name: 'range',
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
                            name: 'from',
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
                            name: 'to',
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
                            name: 'by',
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
                          string: 'Array',
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
                name: 'Number',
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
          content: {
            data: {
              comment: {
                id: '0',
                string:
                  '# String\n\nA `String` is a sequence of characters, such as `h` or `e`, put together to form text such as `hello`.\n\n## Example\n\nWe might want to declare a greeting variable as a `String`:\n\n```logic\n<Declarations>\n  <Variable name="greeting" type="String" value="Hello, world"/>\n</Declarations>\n```',
              },
              declarations: [
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
                name: 'String',
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
                      name: 'concat',
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
                                string: 'String',
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
                            name: 'a',
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
                                string: 'String',
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
                            name: 'b',
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
                          string: 'String',
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
                name: 'String',
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
          content: {
            data: {
              comment: {
                id: '0',
                string:
                  '# Array\n\nA generic type representing a sequence of elements. Each element must be the same type.',
              },
              declarations: [
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
                    name: {
                      id: '0',
                      name: 'Element',
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
              id: '0',
              name: {
                id: '0',
                name: 'Array',
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
                          name: {
                            id: '0',
                            name: 'T',
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
                    id: '0',
                    name: {
                      id: '0',
                      name: 'at',
                    },
                    parameters: [
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
                                      string: 'T',
                                    },
                                  },
                                  type: 'typeIdentifier',
                                },
                              ],
                              id: '0',
                              identifier: {
                                id: '0',
                                isPlaceholder: false,
                                string: 'Array',
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
                            name: 'array',
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
                            name: 'index',
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
                          string: 'T',
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
                name: 'Array',
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
          content: {
            data: {
              cases: [
                {
                  data: {
                    associatedValueTypes: [
                      {
                        data: {
                          genericArguments: [],
                          id: '0',
                          identifier: {
                            id: '0',
                            isPlaceholder: false,
                            string: 'Wrapped',
                          },
                        },
                        type: 'typeIdentifier',
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
                      name: 'value',
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
                    id: '0',
                    name: {
                      id: '0',
                      name: 'none',
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
                  '# Optional\n\nA generic type representing a value that may or may not exist.',
              },
              genericParameters: [
                {
                  data: {
                    id: '0',
                    name: {
                      id: '0',
                      name: 'Wrapped',
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
              id: '0',
              name: {
                id: '0',
                name: 'Optional',
              },
            },
            type: 'enumeration',
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

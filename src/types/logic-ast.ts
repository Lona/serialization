export type Placeholder = {
  type: 'placeholder'
  data: { id: string }
}

export type Identifier = {
  id: string
  string: string
  isPlaceholder: boolean
}

export type VariableDeclaration = {
  type: 'variable'
  data: {
    id: string
    name: Pattern
    annotation?: TypeAnnotation
    initializer?: Expression
    declarationModifier?: string
    comment?: CommentNode
  }
}

export type FunctionDeclaration = {
  type: 'function'
  data: {
    id: string
    name: Pattern
    returnType: TypeAnnotation
    genericParameters: GenericParameter[]
    parameters: FunctionParameter[]
    block: Statement[]
    comment?: CommentNode
  }
}

export type EnumerationDeclaration = {
  type: 'enumeration'
  data: {
    id: string
    name: Pattern
    genericParameters: GenericParameter[]
    cases: EnumerationCase[]
    comment?: CommentNode
  }
}

export type NamespaceDeclaration = {
  type: 'namespace'
  data: {
    id: string
    name: Pattern
    declarations: Declaration[]
  }
}

export type RecordDeclaration = {
  type: 'record'
  data: {
    id: string
    name: Pattern
    genericParameters: GenericParameter[]
    declarations: Declaration[]
    comment?: CommentNode
  }
}

export type ImportDeclarationDeclaration = {
  type: 'importDeclaration'
  data: {
    id: string
    name: Pattern
  }
}

export type Declaration =
  | VariableDeclaration
  | FunctionDeclaration
  | EnumerationDeclaration
  | NamespaceDeclaration
  | Placeholder
  | RecordDeclaration
  | ImportDeclarationDeclaration

export type EnumerationCase =
  | Placeholder
  | {
      type: 'enumerationCase'
      data: {
        id: string
        name: Pattern
        associatedValueTypes: TypeAnnotation[]
        comment?: CommentNode
      }
    }

export type Pattern = {
  id: string
  name: string
}

export type IsEqualToBinaryOperator = {
  type: 'isEqualTo'
  data: { id: string }
}

export type IsNotEqualToBinaryOperator = {
  type: 'isNotEqualTo'
  data: { id: string }
}

export type IsLessThanBinaryOperator = {
  type: 'isLessThan'
  data: { id: string }
}

export type IsGreaterThanBinaryOperator = {
  type: 'isGreaterThan'
  data: { id: string }
}

export type IsLessThanOrEqualToBinaryOperator = {
  type: 'isLessThanOrEqual'
  data: { id: string }
}

export type IsGreaterThanOrEqualToBinaryOperator = {
  type: 'isGreaterThanOrEqual'
  data: { id: string }
}

export type SetEqualToBinaryOperator = {
  type: 'setEqualTo'
  data: { id: string }
}

export type BinaryOperator =
  | IsEqualToBinaryOperator
  | IsNotEqualToBinaryOperator
  | IsLessThanBinaryOperator
  | IsGreaterThanBinaryOperator
  | IsLessThanOrEqualToBinaryOperator
  | IsGreaterThanOrEqualToBinaryOperator
  | SetEqualToBinaryOperator

export type FunctionCallArgument =
  | Placeholder
  | {
      type: 'argument'
      data: {
        id: string
        label?: string
        expression: Expression
      }
    }

export type BinaryExpression = {
  type: 'binaryExpression'
  data: {
    left: Expression
    right: Expression
    op: BinaryOperator
    id: string
  }
}

export type IdentifierExpression = {
  type: 'identifierExpression'
  data: {
    id: string
    identifier: Identifier
  }
}

export type FunctionCallExpression = {
  type: 'functionCallExpression'
  data: {
    id: string
    expression: Expression
    arguments: FunctionCallArgument[]
  }
}

export type LiteralExpression = {
  type: 'literalExpression'
  data: {
    id: string
    literal: Literal
  }
}

export type MemberExpression = {
  type: 'memberExpression'
  data: {
    id: string
    expression: Expression
    memberName: Identifier
  }
}

export type Expression =
  | BinaryExpression
  | IdentifierExpression
  | FunctionCallExpression
  | LiteralExpression
  | MemberExpression
  | Placeholder

export type LoopStatement = {
  type: 'loop'
  data: {
    pattern: Pattern
    expression: Expression
    block: Statement[]
    id: string
  }
}

export type BranchStatement = {
  type: 'branch'
  data: {
    id: string
    condition: Expression
    block: Statement[]
  }
}

export type DeclarationStatement = {
  type: 'declaration'
  data: {
    id: string
    content: Declaration
  }
}

export type ExpressionStatement = {
  type: 'expression'
  data: {
    id: string
    expression: Expression
  }
}

export type Statement =
  | LoopStatement
  | BranchStatement
  | DeclarationStatement
  | ExpressionStatement
  | Placeholder

export type Program = {
  type: 'program'
  data: {
    id: string
    block: Statement[]
  }
}

export type FunctionParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: string
        externalName?: string
        localName: Pattern
        annotation: TypeAnnotation
        defaultValue: FunctionParameterDefaultValue
        comment?: CommentNode
      }
    }

export type NoneFunctionParameterDefaultValue = {
  type: 'none'
  data: { id: string }
}

export type ValueFunctionParameterDefaultValue = {
  type: 'value'
  data: {
    id: string
    expression: Expression
  }
}

export type FunctionParameterDefaultValue =
  | NoneFunctionParameterDefaultValue
  | ValueFunctionParameterDefaultValue

export type TypeIdentifierTypeAnnotation = {
  type: 'typeIdentifier'
  data: {
    id: string
    identifier: Identifier
    genericArguments: TypeAnnotation[]
  }
}

export type FunctionTypeTypeAnnotation = {
  type: 'functionType'
  data: {
    id: string
    returnType: TypeAnnotation
    argumentTypes: TypeAnnotation[]
  }
}

export type TypeAnnotation =
  | TypeIdentifierTypeAnnotation
  | FunctionTypeTypeAnnotation
  | Placeholder

export type NoneLiteral = { type: 'none'; data: { id: string } }

export type BooleanLiteral = {
  type: 'boolean'
  data: {
    id: string
    value: boolean
  }
}

export type NumberLiteral = {
  type: 'number'
  data: {
    id: string
    value: number
  }
}

export type StringLiteral = {
  type: 'string'
  data: {
    id: string
    value: string
  }
}

export type ColorLiteral = {
  type: 'color'
  data: {
    id: string
    value: string
  }
}

export type ArrayLiteral = {
  type: 'array'
  data: {
    id: string
    value: Expression[]
  }
}

export type Literal =
  | NoneLiteral
  | BooleanLiteral
  | NumberLiteral
  | StringLiteral
  | ColorLiteral
  | ArrayLiteral

export type TopLevelParameters = {
  type: 'topLevelParameters'
  data: {
    id: string
    parameters: FunctionParameter[]
  }
}

export type GenericParameter =
  | Placeholder
  | {
      type: 'parameter'
      data: {
        id: string
        name: Pattern
      }
    }

export type TopLevelDeclarations = {
  type: 'topLevelDeclarations'
  data: {
    id: string
    declarations: Declaration[]
  }
}

export type CommentNode = {
  type: 'comment'
  data: {
    id: string
    string: string
  }
}

export type SyntaxNode =
  | Statement
  | Declaration
  | Expression
  | BinaryOperator
  | Program
  | FunctionParameter
  | FunctionParameterDefaultValue
  | TypeAnnotation
  | Literal
  | TopLevelParameters
  | EnumerationCase
  | GenericParameter
  | TopLevelDeclarations
  | CommentNode
  | FunctionCallArgument

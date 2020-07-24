import * as n from '.'

export type Declaration =
  | n.EnumerationDeclaration
  | n.FunctionDeclaration
  | n.ImportDeclaration
  | n.NamespaceDeclaration
  | n.RecordDeclaration
  | n.VariableDeclaration
  | n.Placeholder

export type Expression =
  | n.AssignmentExpression
  | n.FunctionCallExpression
  | n.IdentifierExpression
  | n.LiteralExpression
  | n.MemberExpression
  | n.Placeholder

export type Literal =
  | n.NoneLiteral
  | n.BooleanLiteral
  | n.NumberLiteral
  | n.StringLiteral
  | n.ColorLiteral
  | n.ArrayLiteral

export type Statement =
  | n.BranchStatement
  | n.DeclarationStatement
  | n.ExpressionStatement
  | n.LoopStatement
  | n.ReturnStatement
  | n.Placeholder

export type TypeAnnotation =
  | n.FunctionTypeTypeAnnotation
  | n.TypeIdentifierTypeAnnotation
  | n.Placeholder

export type SyntaxNode =
  | Statement
  | Declaration
  | Expression
  | Literal
  | TypeAnnotation
  | n.Program
  | n.FunctionParameter
  | n.FunctionParameterDefaultValue
  | n.TopLevelParameters
  | n.EnumerationCase
  | n.GenericParameter
  | n.TopLevelDeclarations
  | n.FunctionCallArgument

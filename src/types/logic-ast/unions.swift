public indirect enum LGCSyntaxNode: Codable & Equatable & Equivalentable {
  case statement(LGCStatement)
  case declaration(LGCDeclaration)
  case identifier(LGCIdentifier)
  case expression(LGCExpression)
  case pattern(LGCPattern)
  case program(LGCProgram)
  case functionParameter(LGCFunctionParameter)
  case functionParameterDefaultValue(LGCFunctionParameterDefaultValue)
  case typeAnnotation(LGCTypeAnnotation)
  case literal(LGCLiteral)
  case topLevelParameters(LGCTopLevelParameters)
  case enumerationCase(LGCEnumerationCase)
  case genericParameter(LGCGenericParameter)
  case topLevelDeclarations(LGCTopLevelDeclarations)
  case comment(LGCComment)
  case functionCallArgument(LGCFunctionCallArgument)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "statement":
        self = .statement(try container.decode(LGCStatement.self, forKey: .data))
      case "declaration":
        self = .declaration(try container.decode(LGCDeclaration.self, forKey: .data))
      case "identifier":
        self = .identifier(try container.decode(LGCIdentifier.self, forKey: .data))
      case "expression":
        self = .expression(try container.decode(LGCExpression.self, forKey: .data))
      case "pattern":
        self = .pattern(try container.decode(LGCPattern.self, forKey: .data))
      case "program":
        self = .program(try container.decode(LGCProgram.self, forKey: .data))
      case "functionParameter":
        self = .functionParameter(try container.decode(LGCFunctionParameter.self, forKey: .data))
      case "functionParameterDefaultValue":
        self =
          .functionParameterDefaultValue(try container.decode(LGCFunctionParameterDefaultValue.self, forKey: .data))
      case "typeAnnotation":
        self = .typeAnnotation(try container.decode(LGCTypeAnnotation.self, forKey: .data))
      case "literal":
        self = .literal(try container.decode(LGCLiteral.self, forKey: .data))
      case "topLevelParameters":
        self = .topLevelParameters(try container.decode(LGCTopLevelParameters.self, forKey: .data))
      case "enumerationCase":
        self = .enumerationCase(try container.decode(LGCEnumerationCase.self, forKey: .data))
      case "genericParameter":
        self = .genericParameter(try container.decode(LGCGenericParameter.self, forKey: .data))
      case "topLevelDeclarations":
        self = .topLevelDeclarations(try container.decode(LGCTopLevelDeclarations.self, forKey: .data))
      case "comment":
        self = .comment(try container.decode(LGCComment.self, forKey: .data))
      case "functionCallArgument":
        self = .functionCallArgument(try container.decode(LGCFunctionCallArgument.self, forKey: .data))
      default:
        fatalError("Failed to decode enum due to invalid case type.")
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)

    switch self {
      case .statement(let value):
        try container.encode("statement", forKey: .type)
        try container.encode(value, forKey: .data)
      case .declaration(let value):
        try container.encode("declaration", forKey: .type)
        try container.encode(value, forKey: .data)
      case .identifier(let value):
        try container.encode("identifier", forKey: .type)
        try container.encode(value, forKey: .data)
      case .expression(let value):
        try container.encode("expression", forKey: .type)
        try container.encode(value, forKey: .data)
      case .pattern(let value):
        try container.encode("pattern", forKey: .type)
        try container.encode(value, forKey: .data)
      case .program(let value):
        try container.encode("program", forKey: .type)
        try container.encode(value, forKey: .data)
      case .functionParameter(let value):
        try container.encode("functionParameter", forKey: .type)
        try container.encode(value, forKey: .data)
      case .functionParameterDefaultValue(let value):
        try container.encode("functionParameterDefaultValue", forKey: .type)
        try container.encode(value, forKey: .data)
      case .typeAnnotation(let value):
        try container.encode("typeAnnotation", forKey: .type)
        try container.encode(value, forKey: .data)
      case .literal(let value):
        try container.encode("literal", forKey: .type)
        try container.encode(value, forKey: .data)
      case .topLevelParameters(let value):
        try container.encode("topLevelParameters", forKey: .type)
        try container.encode(value, forKey: .data)
      case .enumerationCase(let value):
        try container.encode("enumerationCase", forKey: .type)
        try container.encode(value, forKey: .data)
      case .genericParameter(let value):
        try container.encode("genericParameter", forKey: .type)
        try container.encode(value, forKey: .data)
      case .topLevelDeclarations(let value):
        try container.encode("topLevelDeclarations", forKey: .type)
        try container.encode(value, forKey: .data)
      case .comment(let value):
        try container.encode("comment", forKey: .type)
        try container.encode(value, forKey: .data)
      case .functionCallArgument(let value):
        try container.encode("functionCallArgument", forKey: .type)
        try container.encode(value, forKey: .data)
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCSyntaxNode>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.statement(let a), .statement(let b)):
        return a.isEquivalentTo(b)
      case (.declaration(let a), .declaration(let b)):
        return a.isEquivalentTo(b)
      case (.identifier(let a), .identifier(let b)):
        return a.isEquivalentTo(b)
      case (.expression(let a), .expression(let b)):
        return a.isEquivalentTo(b)
      case (.pattern(let a), .pattern(let b)):
        return a.isEquivalentTo(b)
      case (.program(let a), .program(let b)):
        return a.isEquivalentTo(b)
      case (.functionParameter(let a), .functionParameter(let b)):
        return a.isEquivalentTo(b)
      case (.functionParameterDefaultValue(let a), .functionParameterDefaultValue(let b)):
        return a.isEquivalentTo(b)
      case (.typeAnnotation(let a), .typeAnnotation(let b)):
        return a.isEquivalentTo(b)
      case (.literal(let a), .literal(let b)):
        return a.isEquivalentTo(b)
      case (.topLevelParameters(let a), .topLevelParameters(let b)):
        return a.isEquivalentTo(b)
      case (.enumerationCase(let a), .enumerationCase(let b)):
        return a.isEquivalentTo(b)
      case (.genericParameter(let a), .genericParameter(let b)):
        return a.isEquivalentTo(b)
      case (.topLevelDeclarations(let a), .topLevelDeclarations(let b)):
        return a.isEquivalentTo(b)
      case (.comment(let a), .comment(let b)):
        return a.isEquivalentTo(b)
      case (.functionCallArgument(let a), .functionCallArgument(let b)):
        return a.isEquivalentTo(b)
      default:
        return false
    }
  }
}

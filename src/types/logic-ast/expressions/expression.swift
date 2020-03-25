public indirect enum LGCExpression: Codable & Equatable & Equivalentable {
  case assignmentExpression(left: LGCExpression, right: LGCExpression, id: UUID)
  case functionCallExpression(id: UUID, expression: LGCExpression, arguments: LGCList<LGCFunctionCallArgument>)
  case identifierExpression(id: UUID, identifier: LGCIdentifier)
  case literalExpression(id: UUID, literal: LGCLiteral)
  case memberExpression(id: UUID, expression: LGCExpression, memberName: LGCIdentifier)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case left
    case right
    case op
    case id
    case identifier
    case expression
    case arguments
    case literal
    case memberName
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "assignmentExpression":
        self =
          .assignmentExpression(
            left: try data.decode(LGCExpression.self, forKey: .left),
            right: try data.decode(LGCExpression.self, forKey: .right),
            id: try data.decode(UUID.self, forKey: .id))
      case "identifierExpression":
        self =
          .identifierExpression(
            id: try data.decode(UUID.self, forKey: .id),
            identifier: try data.decode(LGCIdentifier.self, forKey: .identifier))
      case "functionCallExpression":
        self =
          .functionCallExpression(
            id: try data.decode(UUID.self, forKey: .id),
            expression: try data.decode(LGCExpression.self, forKey: .expression),
            arguments: try data.decode(LGCList.self, forKey: .arguments))
      case "literalExpression":
        self =
          .literalExpression(
            id: try data.decode(UUID.self, forKey: .id),
            literal: try data.decode(LGCLiteral.self, forKey: .literal))
      case "memberExpression":
        self =
          .memberExpression(
            id: try data.decode(UUID.self, forKey: .id),
            expression: try data.decode(LGCExpression.self, forKey: .expression),
            memberName: try data.decode(LGCIdentifier.self, forKey: .memberName))
      case "placeholder":
        self = .placeholder(id: try data.decode(UUID.self, forKey: .id))
      default:
        fatalError("Failed to decode enum due to invalid case type.")
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    var data = container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)

    switch self {
      case .assignmentExpression(let value):
        try container.encode("assignmentExpression", forKey: .type)
        try data.encode(value.left, forKey: .left)
        try data.encode(value.right, forKey: .right)
        try data.encode(value.id, forKey: .id)
      case .identifierExpression(let value):
        try container.encode("identifierExpression", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.identifier, forKey: .identifier)
      case .functionCallExpression(let value):
        try container.encode("functionCallExpression", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.expression, forKey: .expression)
        try data.encode(value.arguments, forKey: .arguments)
      case .literalExpression(let value):
        try container.encode("literalExpression", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.literal, forKey: .literal)
      case .memberExpression(let value):
        try container.encode("memberExpression", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.expression, forKey: .expression)
        try data.encode(value.memberName, forKey: .memberName)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCExpression>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.placeholder(_), .placeholder(_)):
        return true
      case (.assignmentExpression(let a), .assignmentExpression(let b)):
        return a.left.isEquivalentTo(b.left) && a.right.isEquivalentTo(b.right)
      case (.identifierExpression(let a), .identifierExpression(let b)):
        return a.identifier.isEquivalentTo(b.identifier)
      case (.functionCallExpression(let a), .functionCallExpression(let b)):
        return a.expression.isEquivalentTo(b.expression) && a.arguments.isEquivalentTo(b.arguments)
      case (.literalExpression(let a), .literalExpression(let b)):
        return a.literal.isEquivalentTo(b.literal)
      case (.memberExpression(let a), .memberExpression(let b)):
        return a.expression.isEquivalentTo(b.expression) && a.memberName.isEquivalentTo(b.memberName)
      default:
        return false
    }
  }

  public func isPlaceholderNode() -> Bool {
    if case .placeholder = self {
      return true
    }
    return false
  }
}

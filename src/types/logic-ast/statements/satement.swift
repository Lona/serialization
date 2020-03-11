public indirect enum LGCStatement: Codable & Equatable {
  case branch(id: UUID, condition: LGCExpression, block: LGCList<LGCStatement>)
  case declaration(id: UUID, content: LGCDeclaration)
  case expressionStatement(id: UUID, expression: LGCExpression)
  case loop(pattern: LGCPattern, expression: LGCExpression, block: LGCList<LGCStatement>, id: UUID)
  case return(id: UUID, expression: LGCExpression)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case pattern
    case expression
    case block
    case id
    case condition
    case content
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "loop":
        self =
          .loop(
            pattern: try data.decode(LGCPattern.self, forKey: .pattern),
            expression: try data.decode(LGCExpression.self, forKey: .expression),
            block: try data.decode(LGCList.self, forKey: .block),
            id: try data.decode(UUID.self, forKey: .id))
      case "branch":
        self =
          .branch(
            id: try data.decode(UUID.self, forKey: .id),
            condition: try data.decode(LGCExpression.self, forKey: .condition),
            block: try data.decode(LGCList.self, forKey: .block))
      case "declaration":
        self =
          .declaration(
            id: try data.decode(UUID.self, forKey: .id),
            content: try data.decode(LGCDeclaration.self, forKey: .content))
      case "expressionStatement":
        self =
          .expressionStatement(
            id: try data.decode(UUID.self, forKey: .id),
            expression: try data.decode(LGCExpression.self, forKey: .expression))
      case "return":
        self =
          .return(
            id: try data.decode(UUID.self, forKey: .id),
            expression: try data.decode(LGCExpression.self, forKey: .expression))
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
      case .loop(let value):
        try container.encode("loop", forKey: .type)
        try data.encode(value.pattern, forKey: .pattern)
        try data.encode(value.expression, forKey: .expression)
        try data.encode(value.block, forKey: .block)
        try data.encode(value.id, forKey: .id)
      case .branch(let value):
        try container.encode("branch", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.condition, forKey: .condition)
        try data.encode(value.block, forKey: .block)
      case .declaration(let value):
        try container.encode("declaration", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.content, forKey: .content)
      case .expressionStatement(let value):
        try container.encode("expressionStatement", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.expression, forKey: .expression)
      case .return(let value):
        try container.encode("return", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.expression, forKey: .expression)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }
}

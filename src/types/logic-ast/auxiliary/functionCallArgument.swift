public indirect enum LGCFunctionCallArgument: Codable & Equatable & Equivalentable {
  case argument(id: UUID, label: Optional<String>, expression: LGCExpression)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case label
    case expression
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "argument":
        self =
          .argument(
            id: try data.decode(UUID.self, forKey: .id),
            label: try data.decodeIfPresent(String.self, forKey: .label),
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
      case .argument(let value):
        try container.encode("argument", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encodeIfPresent(value.label, forKey: .label)
        try data.encode(value.expression, forKey: .expression)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCFunctionCallArgument>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.placeholder(_), .placeholder(_)):
        return true
      case (.argument(let a), .argument(let b)):
        return a.expression.isEquivalentTo(b.expression) && (a.label ?? "") == (b.label ?? "")
      default:
        return false
    }
  }
}

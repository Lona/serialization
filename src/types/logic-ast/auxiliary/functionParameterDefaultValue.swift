public indirect enum LGCFunctionParameterDefaultValue: Codable & Equatable & Equivalentable {
  case none(id: UUID)
  case value(id: UUID, expression: LGCExpression)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case expression
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "none":
        self = .none(id: try data.decode(UUID.self, forKey: .id))
      case "value":
        self =
          .value(
            id: try data.decode(UUID.self, forKey: .id),
            expression: try data.decode(LGCExpression.self, forKey: .expression))
      default:
        fatalError("Failed to decode enum due to invalid case type.")
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    var data = container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)

    switch self {
      case .none(let value):
        try container.encode("none", forKey: .type)
        try data.encode(value, forKey: .id)
      case .value(let value):
        try container.encode("value", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.expression, forKey: .expression)
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCFunctionParameterDefaultValue>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.none, .none):
        return true
      case (.value(let a), .value(let b)):
        return a.expression.isEquivalentTo(b.expression)
      default:
        return false
    }
  }
}

public indirect enum LGCLiteral: Codable & Equatable & Equivalentable {
  case none(id: UUID)
  case boolean(id: UUID, value: Bool)
  case number(id: UUID, value: CGFloat)
  case string(id: UUID, value: String)
  case color(id: UUID, value: String)
  case array(id: UUID, value: LGCList<LGCExpression>)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case value
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "none":
        self = .none(id: try data.decode(UUID.self, forKey: .id))
      case "boolean":
        self = .boolean(id: try data.decode(UUID.self, forKey: .id), value: try data.decode(Bool.self, forKey: .value))
      case "number":
        self =
          .number(id: try data.decode(UUID.self, forKey: .id), value: try data.decode(CGFloat.self, forKey: .value))
      case "string":
        self = .string(id: try data.decode(UUID.self, forKey: .id), value: try data.decode(String.self, forKey: .value))
      case "color":
        self = .color(id: try data.decode(UUID.self, forKey: .id), value: try data.decode(String.self, forKey: .value))
      case "array":
        self = .array(id: try data.decode(UUID.self, forKey: .id), value: try data.decode(LGCList.self, forKey: .value))
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
      case .boolean(let value):
        try container.encode("boolean", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.value, forKey: .value)
      case .number(let value):
        try container.encode("number", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.value, forKey: .value)
      case .string(let value):
        try container.encode("string", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.value, forKey: .value)
      case .color(let value):
        try container.encode("color", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.value, forKey: .value)
      case .array(let value):
        try container.encode("array", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.value, forKey: .value)
    }
  }

  public func isEquivalentTo(_ node: LGCLiteral) -> Bool {
    switch (self, node) {
      case (.none, .none):
        return true
      case (.boolean(let a), .boolean(let b)):
        return a.value == b.value
      case (.number(let a), .number(let b)):
        return a.value == b.value
      case (.string(let a), .string(let b)):
        return a.value == b.value
      case (.color(let a), .color(let b)):
        return a.value == b.value
      case (.array(let a), .array(let b)):
        return a.value.isEquivalentTo(b.value)
      default:
        return false
    }
  }
}

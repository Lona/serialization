public indirect enum LGCGenericParameter: Codable & Equatable & Equivalentable {
  case parameter(id: UUID, name: LGCPattern)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case name
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "parameter":
        self =
          .parameter(id: try data.decode(UUID.self, forKey: .id), name: try data.decode(LGCPattern.self, forKey: .name))
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
      case .parameter(let value):
        try container.encode("parameter", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCGenericParameter>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.placeholder(_), .placeholder(_)):
        return true
      case (.parameter(let a), .parameter(let b)):
        return a.name.isEquivalentTo(b.name)
      default:
        return false
    }
  }
}

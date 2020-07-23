public indirect enum LGCEnumerationCase: Codable & Equatable & Equivalentable {
  case placeholder(id: UUID)
  case enumerationCase(id: UUID, name: LGCPattern, associatedValueTypes: LGCList<LGCTypeAnnotation>, comment: Optional<LGCComment>)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case name
    case associatedValueTypes
    case comment
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "placeholder":
        self = .placeholder(id: try data.decode(UUID.self, forKey: .id))
      case "enumerationCase":
        self =
          .enumerationCase(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            associatedValueTypes: try data.decode(LGCList.self, forKey: .associatedValueTypes),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
      default:
        fatalError("Failed to decode enum due to invalid case type.")
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    var data = container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)

    switch self {
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
      case .enumerationCase(let value):
        try container.encode("enumerationCase", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encode(value.associatedValueTypes, forKey: .associatedValueTypes)
        try data.encodeIfPresent(value.comment, forKey: .comment)
    }
  }


  public func isEquivalentTo(_ node: LGCEnumerationCase) -> Bool {
    switch (self, node) {
      case (.placeholder, .placeholder):
        return true
      case (.enumerationCase(let a), .enumerationCase(let b)):
        return a.name.isEquivalentTo(b.name) && a.associatedValueTypes.isEquivalentTo(b.associatedValueTypes) && a.comment.isEquivalentTo(b.comment)
      default:
        return false
    }
  }
}

extension LGCEnumerationCase: SyntaxNodePlaceholdable {
  public var isPlaceholder: Bool {
    switch self {
    case .placeholder:
      return true
    default:
      return false
    }
  }

  public static func makePlaceholder() -> LGCEnumerationCase {
    return .placeholder(id: UUID())
  }
}

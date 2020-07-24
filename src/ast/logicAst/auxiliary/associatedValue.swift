public indirect enum LGCAssociatedValue: Codable & Equatable & Equivalentable {
  case placeholder(id: UUID)
  case associatedValue(id: UUID, label: Optional<LGCPattern>, annotation: LGCTypeAnnotation)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case label
    case annotation
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "placeholder":
        self = .placeholder(id: try data.decode(UUID.self, forKey: .id))
      case "annotation":
        self =
          .annotation(
            id: try data.decode(UUID.self, forKey: .id),
            label: try data.decodeIfPresent(LGCPattern.self, forKey: .label),
            annotation: try data.decode(LGCTypeAnnotation.self, forKey: .annotation))
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
      case .associatedValue(let value):
        try container.encode("associatedValue", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encodeIfPresent(value.label, forKey: .label)
        try data.encode(value.annotation, forKey: .annotation)
    }
  }


  public func isEquivalentTo(_ node: LGCAssociatedValue) -> Bool {
    switch (self, node) {
      case (.placeholder, .placeholder):
        return true
      case (.associatedValue(let a), .associatedValue(let b)):
        return a.label.isEquivalentTo(b.label) && a.annotation.isEquivalentTo(b.annotation)
      default:
        return false
    }
  }
}

extension LGCAssociatedValue: SyntaxNodePlaceholdable {
  public var isPlaceholder: Bool {
    switch self {
    case .placeholder:
      return true
    default:
      return false
    }
  }

  public static func makePlaceholder() -> LGCAssociatedValue {
    return .placeholder(id: UUID())
  }
}

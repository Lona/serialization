public indirect enum LGCFunctionParameter: Codable & Equatable & Equivalentable {
  case parameter(id: UUID, localName: LGCPattern, annotation: LGCTypeAnnotation, defaultValue: LGCFunctionParameterDefaultValue, comment: Optional<LGCComment>)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case localName
    case annotation
    case defaultValue
    case comment
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "parameter":
        self =
          .parameter(
            id: try data.decode(UUID.self, forKey: .id),
            localName: try data.decode(LGCPattern.self, forKey: .localName),
            annotation: try data.decode(LGCTypeAnnotation.self, forKey: .annotation),
            defaultValue: try data.decode(LGCFunctionParameterDefaultValue.self, forKey: .defaultValue),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
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
        try data.encode(value.localName, forKey: .localName)
        try data.encode(value.annotation, forKey: .annotation)
        try data.encode(value.defaultValue, forKey: .defaultValue)
        try data.encodeIfPresent(value.comment, forKey: .comment)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }

  public func isEquivalentTo(_ node: LGCFunctionParameter) -> Bool {
    switch (self, node) {
      case (.placeholder, .placeholder):
        return true
      case (.parameter(let a), .parameter(let b)):
        return a.localName.isEquivalentTo(b.localName) && a.annotation.isEquivalentTo(b.annotation) && a.defaultValue.isEquivalentTo(b.defaultValue) && a.comment.isEquivalentTo(b.comment)
      default:
        return false
    }
  }
}

extension LGCFunctionParameter: SyntaxNodePlaceholdable {
  public var isPlaceholder: Bool {
    switch self {
    case .placeholder:
      return true
    default:
      return false
    }
  }

  public static func makePlaceholder() -> LGCFunctionParameter {
    return .placeholder(id: UUID())
  }
}

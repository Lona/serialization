public indirect enum LGCTypeAnnotation: Codable & Equatable & Equivalentable {
  case typeIdentifier(id: UUID, identifier: LGCIdentifier, genericArguments: LGCList<LGCTypeAnnotation>)
  case functionType(id: UUID, returnType: LGCTypeAnnotation, argumentTypes: LGCList<LGCTypeAnnotation>)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case identifier
    case genericArguments
    case returnType
    case argumentTypes
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "typeIdentifier":
        self =
          .typeIdentifier(
            id: try data.decode(UUID.self, forKey: .id),
            identifier: try data.decode(LGCIdentifier.self, forKey: .identifier),
            genericArguments: try data.decode(LGCList.self, forKey: .genericArguments))
      case "functionType":
        self =
          .functionType(
            id: try data.decode(UUID.self, forKey: .id),
            returnType: try data.decode(LGCTypeAnnotation.self, forKey: .returnType),
            argumentTypes: try data.decode(LGCList.self, forKey: .argumentTypes))
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
      case .typeIdentifier(let value):
        try container.encode("typeIdentifier", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.identifier, forKey: .identifier)
        try data.encode(value.genericArguments, forKey: .genericArguments)
      case .functionType(let value):
        try container.encode("functionType", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.returnType, forKey: .returnType)
        try data.encode(value.argumentTypes, forKey: .argumentTypes)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
    }
  }

  public func isEquivalentTo(_ node: LGCTypeAnnotation) -> Bool {
    switch (self, node) {
      case (.placeholder, .placeholder):
        return true
      case (.typeIdentifier(let a), .typeIdentifier(let b)):
        return a.identifier.isEquivalentTo(b.identifier) && a.genericArguments.isEquivalentTo(b.genericArguments)
      case (.functionType(let a), .functionType(let b)):
        return a.returnType.isEquivalentTo(b.returnType) && a.argumentTypes.isEquivalentTo(b.argumentTypes)
      default:
        return false
    }
  }
}

extension LGCTypeAnnotation: SyntaxNodePlaceholdable {
  public var isPlaceholder: Bool {
    switch self {
    case .placeholder:
      return true
    default:
      return false
    }
  }

  public static func makePlaceholder() -> LGCTypeAnnotation {
    return .placeholder(id: UUID())
  }
}

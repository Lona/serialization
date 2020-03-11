public indirect enum LGCDeclaration: Codable & Equatable {
  case enumeration(id: UUID, name: LGCPattern, genericParameters: LGCList<LGCGenericParameter>, cases: LGCList<LGCEnumerationCase>, comment: Optional<LGCComment>)
  case function(id: UUID, name: LGCPattern, returnType: LGCTypeAnnotation, genericParameters: LGCList<LGCGenericParameter>, parameters: LGCList<LGCFunctionParameter>, block: LGCList<LGCStatement>, comment: Optional<LGCComment>)
  case importDeclaration(id: UUID, name: LGCPattern)
  case namespace(id: UUID, name: LGCPattern, declarations: LGCList<LGCDeclaration>)
  case record(id: UUID, name: LGCPattern, genericParameters: LGCList<LGCGenericParameter>, declarations: LGCList<LGCDeclaration>, comment: Optional<LGCComment>)
  case variable(id: UUID, name: LGCPattern, annotation: Optional<LGCTypeAnnotation>, initializer: Optional<LGCExpression>, comment: Optional<LGCComment>)
  case placeholder(id: UUID)

  // MARK: Codable

  public enum CodingKeys: CodingKey {
    case type
    case data
  }

  public enum DataCodingKeys: CodingKey {
    case id
    case name
    case annotation
    case initializer
    case comment
    case returnType
    case genericParameters
    case parameters
    case block
    case cases
    case declarations
  }

  public init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    let data = try container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)
    let type = try container.decode(String.self, forKey: .type)

    switch type {
      case "variable":
        self =
          .variable(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            annotation: try data.decodeIfPresent(LGCTypeAnnotation.self, forKey: .annotation),
            initializer: try data.decodeIfPresent(LGCExpression.self, forKey: .initializer),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
      case "function":
        self =
          .function(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            returnType: try data.decode(LGCTypeAnnotation.self, forKey: .returnType),
            genericParameters: try data.decode(LGCList.self, forKey: .genericParameters),
            parameters: try data.decode(LGCList.self, forKey: .parameters),
            block: try data.decode(LGCList.self, forKey: .block),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
      case "enumeration":
        self =
          .enumeration(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            genericParameters: try data.decode(LGCList.self, forKey: .genericParameters),
            cases: try data.decode(LGCList.self, forKey: .cases),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
      case "namespace":
        self =
          .namespace(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            declarations: try data.decode(LGCList.self, forKey: .declarations))
      case "placeholder":
        self = .placeholder(id: try data.decode(UUID.self, forKey: .id))
      case "record":
        self =
          .record(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name),
            genericParameters: try data.decode(LGCList.self, forKey: .genericParameters),
            declarations: try data.decode(LGCList.self, forKey: .declarations),
            comment: try data.decodeIfPresent(LGCComment.self, forKey: .comment))
      case "importDeclaration":
        self =
          .importDeclaration(
            id: try data.decode(UUID.self, forKey: .id),
            name: try data.decode(LGCPattern.self, forKey: .name))
      default:
        fatalError("Failed to decode enum due to invalid case type.")
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    var data = container.nestedContainer(keyedBy: DataCodingKeys.self, forKey: CodingKeys.data)

    switch self {
      case .variable(let value):
        try container.encode("variable", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encodeIfPresent(value.annotation, forKey: .annotation)
        try data.encodeIfPresent(value.initializer, forKey: .initializer)
        try data.encodeIfPresent(value.comment, forKey: .comment)
      case .function(let value):
        try container.encode("function", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encode(value.returnType, forKey: .returnType)
        try data.encode(value.genericParameters, forKey: .genericParameters)
        try data.encode(value.parameters, forKey: .parameters)
        try data.encode(value.block, forKey: .block)
        try data.encodeIfPresent(value.comment, forKey: .comment)
      case .enumeration(let value):
        try container.encode("enumeration", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encode(value.genericParameters, forKey: .genericParameters)
        try data.encode(value.cases, forKey: .cases)
        try data.encodeIfPresent(value.comment, forKey: .comment)
      case .namespace(let value):
        try container.encode("namespace", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encode(value.declarations, forKey: .declarations)
      case .placeholder(let value):
        try container.encode("placeholder", forKey: .type)
        try data.encode(value, forKey: .id)
      case .record(let value):
        try container.encode("record", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
        try data.encode(value.genericParameters, forKey: .genericParameters)
        try data.encode(value.declarations, forKey: .declarations)
        try data.encodeIfPresent(value.comment, forKey: .comment)
      case .importDeclaration(let value):
        try container.encode("importDeclaration", forKey: .type)
        try data.encode(value.id, forKey: .id)
        try data.encode(value.name, forKey: .name)
    }
  }
}

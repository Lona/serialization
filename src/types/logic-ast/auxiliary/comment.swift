public struct LGCComment: Codable & Equatable {
  public init(id: UUID, string: String) {
    self.id = id
    self.string = string
  }

  public var id: UUID
  public var string: String
}

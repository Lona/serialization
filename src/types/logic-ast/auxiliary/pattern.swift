public struct LGCPattern: Codable & Equatable {
  public init(id: UUID, name: String) {
    self.id = id
    self.name = name
  }

  public var id: UUID
  public var name: String
}

public struct LGCPattern: Codable & Equatable & Equivalentable {
  public init(id: UUID, name: String) {
    self.id = id
    self.name = name
  }

  public var id: UUID
  public var name: String

  public func isEquivalentTo(_ node: LGCPattern) -> Bool {
    return self.name == node.name
  }
}

public struct LGCPattern: Codable & Equatable & Equivalentable {
  public init(id: UUID, name: String) {
    self.id = id
    self.name = name
  }

  public var id: UUID
  public var name: String

  public func isEquivalentTo(_ node: Optional<LGCPattern>) -> Bool {
    guard let node = node else { return false }
    return self.name == node.name
  }

  public func isPlaceholderNode() -> Bool {
    return false
  }
}

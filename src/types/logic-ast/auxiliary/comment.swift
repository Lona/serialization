public struct LGCComment: Codable & Equatable & Equivalentable {
  public init(id: UUID, string: String) {
    self.id = id
    self.string = string
  }

  public var id: UUID
  public var string: String

  public func isEquivalentTo(_ node: Optional<LGCComment>) -> Bool {
    guard let node = node else { return false }
    return self.string == node.string
  }

  public func isPlaceholderNode() -> Bool {
    return false
  }
}

public struct LGCComment: Codable & Equatable & Equivalentable {
  public init(id: UUID, string: String) {
    self.id = id
    self.string = string
  }

  public var id: UUID
  public var string: String

  public func isEquivalentTo(_ node: LGCComment) -> Bool {
    return self.string == node.string
  }
}

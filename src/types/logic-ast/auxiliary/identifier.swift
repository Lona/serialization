public struct LGCIdentifier: Codable & Equatable & Equivalentable {
  public init(id: UUID, string: String, isPlaceholder: Bool) {
    self.id = id
    self.string = string
    self.isPlaceholder = isPlaceholder
  }

  public var id: UUID
  public var string: String
  public var isPlaceholder: Bool

  public func isEquivalentTo(_ node: LGCIdentifier) -> Bool {
    return self.string == node.string && self.isPlaceholder == node.isPlaceholder
  }
}

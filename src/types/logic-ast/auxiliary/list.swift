public indirect enum LGCList<T: Equatable & Codable & Equivalentable>: Codable & Equatable & Equivalentable {
  case next(T, LGCList)
  case empty

  // MARK: Codable

  public init(from decoder: Decoder) throws {
    var unkeyedContainer = try decoder.unkeyedContainer()

    var items: [T] = []
    while !unkeyedContainer.isAtEnd {
      items.append(try unkeyedContainer.decode(T.self))
    }

    self = .empty
    while let item = items.popLast() {
      self = .next(item, self)
    }
  }

  public func encode(to encoder: Encoder) throws {
    var unkeyedContainer = encoder.unkeyedContainer()

    var head = self

    while case let .next(item, next) = head {
      try unkeyedContainer.encode(item)
      head = next
    }
  }

  public func isEquivalentTo(_ node: Optional<LGCList<T>>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.empty, .empty):
        return true
      case (.empty,  .next(let b, let restB)):
        return b.isPlaceholderNode() && self.isEquivalentTo(restB)
      case (.next(let a, let restA), .empty):
        return a.isPlaceholderNode() && node.isEquivalentTo(restA)
      case (.next(let a, let restA), .next(let b, let restB)):
        return a.isEquivalentTo(b) && restA.isEquivalentTo(restB)
    }
  }

  public func isPlaceholderNode() -> Bool {
    return false
  }
}

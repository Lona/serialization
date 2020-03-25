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

  public func isEquivalentTo(_ node: LGCList<T>) -> Bool {
    switch (self, node) {
      case (.empty, .empty):
        return true
      case (.next(let a, let restA), .next(let b, let restB)):
        return a.isEquivalentTo(b) && restA.isEquivalentTo(restB)
      default:
        return false
    }
  }
}

extension LGCList where T: SyntaxNodePlaceholdable {
  public func isEquivalentTo(_ node: Optional<LGCList<T>>) -> Bool {
    guard let node = node else { return false }
    switch (self, node) {
      case (.empty, .empty):
        return true
      case (.empty,  .next(let b, let restB)):
        return b.isPlaceholder && self.isEquivalentTo(restB)
      case (.next(let a, let restA), .empty):
        return a.isPlaceholder && node.isEquivalentTo(restA)
      case (.next(let a, let restA), .next(let b, let restB)):
        return a.isEquivalentTo(b) && restA.isEquivalentTo(restB)
    }
  }
}

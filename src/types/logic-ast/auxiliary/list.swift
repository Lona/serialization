public indirect enum LGCList<T: Equatable & Codable>: Codable & Equatable {
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
}

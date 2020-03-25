public struct LGCProgram: Codable & Equatable & Equivalentable {
  public init(id: UUID, block: LGCList<LGCStatement>) {
    self.id = id
    self.block = block
  }

  public var id: UUID
  public var block: LGCList<LGCStatement>

  public func isEquivalentTo(_ node: Optional<LGCProgram>) -> Bool {
    guard let node = node else { return false }
    return self.block.isEquivalentTo(node.block)
  }
}

public struct LGCTopLevelDeclarations: Codable & Equatable & Equivalentable {
  public init(id: UUID, declarations: LGCList<LGCDeclaration>) {
    self.id = id
    self.declarations = declarations
  }

  public var id: UUID
  public var declarations: LGCList<LGCDeclaration>

  public func isEquivalentTo(_ node: Optional<LGCTopLevelDeclarations>) -> Bool {
    guard let node = node else { return false }
    return self.declarations.isEquivalentTo(node.declarations)
  }
}

public struct LGCTopLevelParameters: Codable & Equatable & Equivalentable {
  public init(id: UUID, parameters: LGCList<LGCFunctionParameter>) {
    self.id = id
    self.parameters = parameters
  }

  public var id: UUID
  public var parameters: LGCList<LGCFunctionParameter>

  public func isEquivalentTo(_ node: Optional<LGCTopLevelParameters>) -> Bool {
    guard let node = node else { return false }
    return self.parameters.isEquivalentTo(node.parameters)
  }
}

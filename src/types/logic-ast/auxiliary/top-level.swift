public struct LGCProgram: Codable & Equatable & Equivalentable {
  public init(id: UUID, block: LGCList<LGCStatement>) {
    self.id = id
    self.block = block
  }

  public var id: UUID
  public var block: LGCList<LGCStatement>

  public func isEquivalentTo(_ node: LGCProgram) -> Bool {
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

  public func isEquivalentTo(_ node: LGCTopLevelDeclarations) -> Bool {
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

  public func isEquivalentTo(_ node: LGCTopLevelParameters) -> Bool {
    return self.parameters.isEquivalentTo(node.parameters)
  }
}

public struct LGCProgram: Codable & Equatable {
  public init(id: UUID, block: LGCList<LGCStatement>) {
    self.id = id
    self.block = block
  }

  public var id: UUID
  public var block: LGCList<LGCStatement>
}

public struct LGCTopLevelDeclarations: Codable & Equatable {
  public init(id: UUID, declarations: LGCList<LGCDeclaration>) {
    self.id = id
    self.declarations = declarations
  }

  public var id: UUID
  public var declarations: LGCList<LGCDeclaration>
}

public struct LGCTopLevelParameters: Codable & Equatable {
  public init(id: UUID, parameters: LGCList<LGCFunctionParameter>) {
    self.id = id
    self.parameters = parameters
  }

  public var id: UUID
  public var parameters: LGCList<LGCFunctionParameter>
}

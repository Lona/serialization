public protocol SyntaxNodePlaceholdable {
  var isPlaceholder: Bool { get }
  static func makePlaceholder() -> Self
}

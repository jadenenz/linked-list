function createNode(value) {
  return {
    value: value ? value : null,
    next: null,
  }
}

module.exports = createNode

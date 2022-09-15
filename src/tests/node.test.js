const createNode = require("../node")

let node

function setNode() {
  node = createNode()
}

function clearNode() {
  node = null
}

beforeEach(() => {
  setNode()
})

afterEach(() => {
  clearNode()
})

test("factory function creates an object", () => {
  expect(node && typeof node === "object").toBe(true)
})

test("new node can take a value and properly set it", () => {
  let newNode = createNode(6)
  const testObject = {
    value: 6,
    next: null,
  }
  expect(newNode).toMatchObject(testObject)
})

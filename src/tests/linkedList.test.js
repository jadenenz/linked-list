const createLinkedList = require("../linkedList")

let list
function setList() {
  list = createLinkedList()
}

function wipeList() {
  list = null
}

beforeEach(() => {
  setList()
})

afterEach(() => {
  wipeList()
})

test("factory function creates an object", () => {
  expect(list && typeof list === "object").toBe(true)
})

test("appendNode adds a node at the end of the list", () => {
  const testObject = {
    head: {
      value: 5,
      next: null,
    },
  }
  list.appendNode(5)
  expect(list.linkedList).toMatchObject(testObject)
})

test("appendNode can be used twice", () => {
  const testObject = {
    head: {
      value: 5,
      next: {
        value: 12,
        next: null,
      },
    },
  }

  list.appendNode(5)
  list.appendNode(12)
  expect(list.linkedList).toMatchObject(testObject)
})

test("appendNode can be used four times", () => {
  list.appendNode(10)
  list.appendNode(25)
  list.appendNode(37)
  list.appendNode(400)
  const testResult = {
    head: {
      value: 10,
      next: {
        value: 25,
        next: {
          value: 37,
          next: {
            value: 400,
            next: null,
          },
        },
      },
    },
  }
  expect(list.linkedList).toMatchObject(testResult)
})

test("prependNode adds a node to the beginning of a list of 1 node", () => {
  list.appendNode(3)
  list.prependNode(10)
  const testObject = {
    head: {
      value: 10,
      next: {
        value: 3,
        next: null,
      },
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("prependNode adds a node to the begginin of a list of 4 nodes", () => {
  list.appendNode(1) //1
  list.prependNode(2) //2, 1
  list.appendNode(3) //2, 1, 3
  list.prependNode(4) //4, 2, 1, 3
  list.prependNode(5) // 5, 4, 2, 1, 3
  const testObject = {
    head: {
      value: 5,
      next: {
        value: 4,
        next: {
          value: 2,
          next: {
            value: 1,
            next: {
              value: 3,
              next: null,
            },
          },
        },
      },
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("size returns the size of the linked list", () => {
  list.appendNode(5)
  list.prependNode(10)
  list.appendNode(25)
  list.prependNode(2000)
  expect(list.size()).toBe(4)
})

test("size returns the size of the linked list (big)", () => {
  list.appendNode(5)
  list.prependNode(10)
  list.appendNode(25)
  list.appendNode(300)
  list.appendNode(20000)
  list.appendNode(30)
  list.appendNode(99)
  list.prependNode(2000)
  expect(list.size()).toBe(8)
})

test("head returns first node in the list", () => {
  list.appendNode(1)
  const testObject = {
    value: 1,
    next: null,
  }
  expect(list.head()).toMatchObject(testObject)
})

test("head returns null in empty list", () => {
  expect(list.head()).toBe(null)
})

test("tail returns the last node in the list", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  const testObject = {
    value: 3,
    next: null,
  }
  expect(list.tail()).toMatchObject(testObject)
})

test("at returns value at specified index", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  const testObject = {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  }
  expect(list.at(1)).toMatchObject(testObject)
})

test("pop removes the last element in the list", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  list.pop()
  const testObject = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: null,
      },
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("pop removes the last element in the list from a list of 2", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.pop()
  const testObject = {
    head: {
      value: 1,
      next: null,
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("pop removes the last element in the list from a list of 1", () => {
  list.appendNode(1)
  list.pop()
  const testObject = {
    head: null,
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("can readd nodes after popping all nodes out", () => {
  list.appendNode(1)
  list.pop()
  list.appendNode(2)
  const testObject = {
    head: {
      value: 2,
      next: null,
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("contains is able to find a value in the list", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(7)
  list.appendNode(325)
  expect(list.contains(325)).toBe(true)
})

test("contains properly returns false when the value is not in the list", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(325)
  list.appendNode(7)
  expect(list.contains(40000)).toBe(false)
})

test("find returns the index of the node that contains the given value", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(325)
  list.appendNode(7)
  expect(list.find(7)).toBe(3)
})

test("toString returns the entire list of nodes in the correct format", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  list.appendNode(25)
  list.appendNode(14)
  const testString = "{ 1 } -> { 2 } -> { 3 } -> { 25 } -> { 14 } -> null"
  console.log(list.head())
  expect(list.toString()).toBe(testString)
})

test("insertAt inserts a node with provided value at the given index", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  list.insertAt(5, 1)
  const testObject = {
    head: {
      value: 1,
      next: {
        value: 5,
        next: {
          value: 2,
          next: {
            value: 3,
            next: null,
          },
        },
      },
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

test("removeAt removes a node at the provided index", () => {
  list.appendNode(1)
  list.appendNode(2)
  list.appendNode(3)
  list.appendNode(4)
  list.removeAt(2)
  const testObject = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  }
  expect(list.linkedList).toMatchObject(testObject)
})

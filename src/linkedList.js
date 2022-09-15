const createNode = require("./node")

function createLinkedList() {
  const linkedList = {
    head: null,
  }

  //Adds a node to the back of the list
  const appendNode = (value) => {
    const newNode = createNode(value)
    //If the linked list is empty
    if (linkedList.head === null) {
      linkedList.head = newNode
      //Else walk through nodes until next === null
    } else {
      let currentNode = linkedList.head
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }

  //Adds a node to the front of the list
  const prependNode = (value) => {
    const newNode = createNode(value)
    //If the linked list is empty
    if (linkedList.head === null) {
      linkedList.head = newNode
      //Else store the head in a variable
    } else {
      let tempStorage = linkedList.head
      //Move the pointer of the new head to the old head
      newNode.next = tempStorage
      //Set the newNode as the new head
      linkedList.head = newNode
    }
  }

  //Returns the number of nodes in the list
  const size = () => {
    let count = 0
    //If the linked list is empty
    if (linkedList.head === null) {
      return count
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until next === null
      while (currentNode.next != null) {
        currentNode = currentNode.next
        count++
      }
      return count + 1
    }
  }

  //Returns the head of the list
  const head = () => {
    return linkedList.head
  }

  //Returns the last element in the list
  const tail = () => {
    //If the linked list is empty
    if (linkedList.head === null) {
      return linkedList.head
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until next === null
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      return currentNode
    }
  }

  //Returns the element at a given index
  const at = (index) => {
    let count = 0
    //If the linked list is empty
    if (linkedList.head === null) {
      return linkedList.head
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until count === index
      while (count < index) {
        currentNode = currentNode.next
        count++
      }
      return currentNode
    }
  }

  //Removes the last element in the list
  const pop = () => {
    //If the linked list is empty
    if (linkedList.head === null) {
      return linkedList.head
    } else {
      if (linkedList.head.next === null) {
        linkedList.head = null
      } else {
        let currentNode = linkedList.head
        //Else walk through nodes until value === null (last element)
        while (currentNode.next.next != null) {
          currentNode = currentNode.next
        }
        currentNode.next = null
      }
    }
  }

  //Returns true if a given value is contained in the list, false if it is not.
  const contains = (value) => {
    if (linkedList.head === null) {
      return false
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until next === null
      while (currentNode.next != null) {
        if (currentNode.value === value) {
          return true
        }
        currentNode = currentNode.next
      }
      if (currentNode.value === value) {
        return true
      }
      return false
    }
  }

  //Returns the index of a node containing a given value if it exists, otherwise return null
  const find = (value) => {
    let count = 0
    //If the linked list is empty
    if (linkedList.head === null) {
      return null
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until value === null
      while (currentNode.value != null) {
        if (currentNode.value === value) {
          return count
        }
        currentNode = currentNode.next
        count++
      }
      return null
    }
  }

  //Returns a string that represents the linkedList
  const toString = () => {
    //If the linked list is empty
    if (linkedList.head === null) {
      return "null"
    } else {
      let currentNode = linkedList.head
      let stringContainer = ""
      //Else walk through nodes until next === null
      while (currentNode.next != null) {
        const newString = `{ ${currentNode.value} } -> `
        stringContainer += newString
        currentNode = currentNode.next
      }
      const newString = `{ ${currentNode.value} } -> `
      stringContainer += newString
      return stringContainer.concat("null")
    }
  }

  const insertAt = (value, index) => {
    // If the list is empty
    //    return head null
    // Create newNode with value
    // Else set count = 0
    // Walk through nodes until count = index - 1
    // Store currentNode.next in a variable oldNode
    // Set currentNode.next to newNode
    // set currentNode.next.next to oldNode
    const newNode = createNode(value)
    let count = 0
    //If the linked list is empty
    if (linkedList.head === null) {
      return linkedList.head
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until count === index
      while (count < index - 1) {
        currentNode = currentNode.next
        count++
      }
      let oldNode = currentNode.next
      currentNode.next = newNode
      currentNode.next.next = oldNode
    }
  }

  const removeAt = (index) => {
    let count = 0
    //If the linked list is empty
    if (linkedList.head === null) {
      return linkedList.head
    } else {
      let currentNode = linkedList.head
      //Else walk through nodes until count === index
      while (count < index - 1) {
        currentNode = currentNode.next
        count++
      }
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode.next = currentNode.next.next
      }
    }
  }

  return {
    linkedList,
    appendNode,
    prependNode,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  }
}

module.exports = createLinkedList

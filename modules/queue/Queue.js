class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)
    if (this.first === null) {
      this.first = node
    }
    if (this.last) {
      this.last.next = node
    }
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }

  show() {
    if (this.first.value !== null) {
      return this.first.value
    }
  }

  all() {
    let currNode = queue.first
    while (currNode !== null) {
      currNode = curNode.next
    }

  }
}

class_Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

module.exports = { Queue, _Node }

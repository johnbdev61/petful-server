class _Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

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
      this.last === null
    }
    return node.value
  }

  show() {
    if (!this.first) {
      return
    }
    return this.first.value
  }

  all() {
    const everything = []
    let current = this.first

    while (current) {
      everything.push(current.value)
      current = current.next
    }
    return everything
  }
}

module.exports = Queue

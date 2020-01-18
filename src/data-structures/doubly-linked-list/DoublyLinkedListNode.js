export default class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value
    this.previous = previous
    this.next = next
  }

  toString(cb) {
    if (cb) {
      return cb(this.value)
    }

    return this.value.toString()
  }
}

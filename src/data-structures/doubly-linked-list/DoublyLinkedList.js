import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  toString(func) {
    if (!this.head || !this.head.next) return ''

    let currentNode = this.head
    const list = []
    while (currentNode && currentNode.value) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }
    return func ? list.map(func).join(',') : list.join(',')
  }

  initList(value) {
    const newNode = new DoublyLinkedListNode(value)
    this.head = newNode
    this.tail = newNode
  }

  append(value) {
    if (!this.head) {
      this.initList(value)
      return
    }

    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }
    const newNode = new DoublyLinkedListNode(value, null, currentNode)
    currentNode.next = newNode
    this.tail = newNode
  }

  prepend(value) {
    if (!this.head) {
      this.initList(value)
      return
    }

    const currentNode = this.head
    const newNode = new DoublyLinkedListNode(value, currentNode, null)
    this.head = newNode
  }
  

}

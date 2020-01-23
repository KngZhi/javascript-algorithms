import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  toString(func) {
    if (!this.head) return ''
    if (!this.head.next) {
      return this.head.value.toString()
    }

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

  fromArray(array) {
    if (array.length === 1) {
      this.initList(array[0])
      return
    }
    this.head = new DoublyLinkedListNode(array[0])

    array.slice(1).forEach(value => this.append(value))
  }

  /**
   * @returns {array}
   */
  toArray() {
    if (!this.head) {
      return []
    }

    const result = []
    let currentNode = this.head
    while (currentNode && currentNode.value) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }

    return result
  }

  /**
   * @param {any} value
   * @description delete nodes by given value
   */
  delete(value) {
    let deleteNode = null
    if (!this.head) {
      return deleteNode
    }
    const newNodeList = new DoublyLinkedList()
    let currentNode = this.head
    while (currentNode && currentNode.value) {
      if (currentNode.value !== value) {
        newNodeList.append(currentNode.value)
      } else {
        deleteNode = new DoublyLinkedListNode(currentNode.value)
      }
      currentNode = currentNode.next
    }

    if (deleteNode) {
      this.head = newNodeList.head
      this.tail = newNodeList.tail
    }

    return deleteNode
  }

  deleteTail() {
    let deleteNode = null
    if (!this.head) {
      return deleteNode
    }

    let currentNode = this.head
    if (!currentNode.next) {
      deleteNode = this.head
      this.head = null
      this.tail = null
      return deleteNode
    }

    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        deleteNode = currentNode.next
        currentNode.next = null
        this.tail = currentNode
      }

      currentNode = currentNode.next
    }

    return deleteNode
  }
}

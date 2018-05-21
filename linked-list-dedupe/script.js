'use strict';

class DoublyLinkedList {
    constructor() {
        this.current = null;
        this.head = null;
        this.tail = null;

        this.addToList = this.addToList.bind(this);
        this.setNewNodeProps = this.setNewNodeProps.bind(this);
    }

    addToList(node) {
        this.setNewNodeProps(node, this.tail);

        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }

    setNewNodeProps(node, tail) {
        node.next = null;
        node.previous = tail;
    }
}

class Node {
    constructor(value) {
        this.next = null;
        this.previous = null;
        this.value = value;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(3);

const linkedList = new DoublyLinkedList();

[node1, node2, node3].forEach(node => linkedList.addToList(node));

console.log(linkedList);

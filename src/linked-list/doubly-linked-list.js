'use strict';

class DoublyLinkedList {
    constructor() {
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

    removeNode(node) {
        if (node.previous) {
            node.previous.next = node.next;
        }

        if (node.next) {
            node.next.previous = node.previous
        }

        if (node === this.tail) {
            this.tail = node.previous;
        }

        if (node === this.head) {
            this.head = node.next;
        }
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
        this.id = createUniqueIdentifier();
    }
}

const createUniqueIdentifier = () => +(Math.random() * 100).toString().replace('.', '');

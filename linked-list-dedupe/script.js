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

const dedupeList = list => {
    const values = new Set([]);
    let currentNode = list.head;
    let nextIsNotNull = true;

    while(nextIsNotNull) {
        if (!values.has(currentNode.value)) {
            values.add(currentNode.value);
        }

        else {
            list.removeNode(currentNode);
        }

        if (currentNode.next === null) {
            nextIsNotNull = false;
        }

        currentNode = currentNode.next;
    }
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(3);

const linkedList = new DoublyLinkedList();

[node1, node2, node3, node4].forEach(node => linkedList.addToList(node));

dedupeList(linkedList);

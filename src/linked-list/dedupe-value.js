'use strict';

(() => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(3);

    const linkedList = new DoublyLinkedList();

    [node1, node2, node3, node4].forEach(node => linkedList.addToList(node));

    dedupeList(linkedList);
    console.log('deduped linked list = ', linkedList);
})();

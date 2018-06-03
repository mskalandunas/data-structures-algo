'use strict';

const dedupeList = list => {
    const values = new Set([]);
    let currentNode = list.head;

    while(currentNode.next) {
        if (!values.has(currentNode.value)) {
            values.add(currentNode.value);
        }

        else {
            list.removeNode(currentNode);
        }

        currentNode = currentNode.next;
    }
};

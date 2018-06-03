'use strict';

const partionAroundValue = (list, value) => {
    // all values less than x come before all values greater than or equal to x
    const nodeDict = {};
    let currentNode = list.head;


    while (currentNode) {
        const { next, value } = currentNode;

        if (!nodeDict[value]) {
            nodeDict[value] = [];
        }

        nodeDict[value].push(currentNode);
        currentNode = next;
    }

    const nodeArray = Object.values(nodeDict);
    const flattenedArray = flattenArray(nodeArray);
    console.log(flattenedArray);
};

const flattenArray = array => {
    const newArray = array.map(index => index.length === 1 ? index[0] : index.map(index => index));

    return newArray.concat();
}

(() => {
    const partionedList = new DoublyLinkedList();

    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(3);
    const node5 = new Node(4);

    [node1, node2, node3, node4, node5].forEach(node => partionedList.addToList(node));

    partionAroundValue(partionedList);
    console.log('partioned list = ', partionedList);
})();

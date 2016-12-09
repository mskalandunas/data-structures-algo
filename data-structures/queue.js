// Queue
// Queue = first in, first out
const queue = [];
const items = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
  'item 7'
];

function addToQueue(input, s) {
  let len = input.length;

  for (i = 0; i < len; i++) {
    s.push(input[i]);
  };

  console.log(s);
};

function removeFromQueue(s) {
  s.shift();
  console.log(s);
};

addToQueue(items, queue);
removeFromQueue(queue);
removeFromQueue(queue);
removeFromQueue(queue);

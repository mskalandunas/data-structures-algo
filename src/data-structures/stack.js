// Stack
// Stack = first in, last out
const stack = [];
const items = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
  'item 7'
];

function addToStack(input, s) {
  let len = input.length;

  for (i = 0; i < len; i++) {
    s.push(input[i]);
    console.log(s);
  };
};

function removeFromStack(s) {
  s.pop();
  console.log(s);
};

addToStack(items, stack);
removeFromStack(stack);
removeFromStack(stack);
removeFromStack(stack);

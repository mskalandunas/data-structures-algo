// 2 lists as input a, b
// output list has all elements in a that are not in b
var arr1 = ['a', 'b', 'c', 'e'];
var arr2 = ['a', 'd', 'e', 'b'];

function newFunc(a, b) {
  var lenA = a.length;
  var lenB = b.length;
  var newArr = [];
  var match;

  for (var i = 0; i < lenA; i++) {
    match = false;

    for (var j = 0; j < lenB; j++) {
      if (a[i] === b[j]) {
        match = true;
      }
    };

    if (match === false) {
      newArr.push(a[i]);
    };
  };

  return newArr;
};

// with filter
function difference(a, b) {
  return a.filter(i => b.indexOf(i) == -1);
};

newFunc(arr1, arr2);
difference(arr1, arr2);

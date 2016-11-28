/*

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns
the same string with all even indexed characters in each word upper cased, and all
odd indexed characters in each word lower cased. The indexing just explained is zero
based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' ').
Spaces will only be present if there are multiple words. Words will be separated
by a single space(' ').

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
  var output = '';
  var counter = 0;

  for (var i = 0, len = string.length; i < len; i++) {
    if (string[i] === ' ') {
      output = output + string[i];
      counter = 0;
    } else if (counter % 2 == 0) {
      output = output + string[i].toUpperCase();
      counter++;
    } else {
      output = output + string[i].toLowerCase();
      counter = 0;
    }
  };

  return output;
}

toWeirdCase('hello world hi hi');

/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

function accum(s) {
  var output = '';

  for (var i = 0, len = s.length; i < len; i++) {
    var first  = s[i].toUpperCase();
    var second = s[i].toLowerCase().repeat(i);
    output = (i < len - 1) ? output + first + second + '-' : output + first + second;
  };

  return output;
};

/*

Correct this code so that the greet function returns the expected value.

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
}

*/

// answer

function Person(name) {
  this.name = name;
};

Person.prototype.greet = function(otherName) {
  return "Hi " + otherName + ", my name is " + this.name;
};

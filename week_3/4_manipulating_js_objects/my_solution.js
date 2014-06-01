
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below. - I copy and pasted from the browser of that is ok.


//function assert(test, message, test_number) { if (!test) { console.log(test_number + "false"); throw "ERROR: " + message; } console.log(test_number + "true"); return true; }
//undefined

var adam = {}
//undefined
//assert( (adam instanceof Object), "The value of adam should be an Object.", "1. " )
//1. true VM131477:7



//assert( (adam.name === "Adam"), "The value of the adam name property should be 'Adam'.", "2. " )
//2. false VM131477:4
//"ERROR: The value of the adam name property should be 'Adam'."
var adam = {name: "Adam"}
//undefined
//assert( (adam.name === "Adam"), "The value of the adam name property should be 'Adam'.", "2. " )
//2. true VM131477:7
//true


//var terah = { name: "Terah", age: 32, height: 66, weight: 130, hairColor: "brown", eyeColor: "brown" }
//undefined
terah.spouse = adam
//Object {name: "Adam"}
//assert( terah.spouse === adam, "terah should have a spouse property with the value of the variable adam.", "3. " )
//3. true VM131477:7
//true

terah.weight = 125
125
//assert( terah.weight === 125, "The terah weight property should be 125.", "4. " )
//4. true VM131477:7
//true

delete terah.eyeColor
//true
//assert( terah.eyeColor === undefined, "The terah eyeColor property should be removed.", "5. " )
//5. true VM131477:7
//true

adam.spouse
//undefined
adam.spouse = terah
//Object {name: "Terah", age: 32, height: 66, weight: 125, hairColor: "brown"…}
//assert( terah.spouse.spouse === terah, "The terah spouse property's value spouse property should be terah.", "6. " )
//6. true VM131477:7
true

terah.children ={}


// mistake terah.children.carson = Carson
//ReferenceError: Carson is not defined
terah.children.carson = {name: "Carson"};
//Object {name: "Carson"}
//assert( terah.children.carson.name === "Carson", "The terah children property should have a carson property with its own property name with a value of 'Carson'.", "8. " )
//8. true VM131477:7
true

terah.children.carter = {name: "Carter"};
//Object {name: "Carter"}
//assert( terah.children.carter.name === "Carter", "The terah children property should have a carter property with its own property name with a value of 'Carter'.", "9. " )
//9. true VM131477:7
true

terah.children.colton = {name: "Colton"};
//Object {name: "Colton"}
//assert( terah.children.colton.name === "Colton", "The terah children property should have a colton property with its own property name with a value of 'Colton'.", "10. " )
//10. true VM131477:7
true

adam.children = terah.children
//Object {carson: Object, carter: Object, colton: Object}
//assert( adam.children === terah.children, "The value of the adam children property should be the value of the terah children property", "11. " )
//11. true VM131477:7
true


console.log("\nHere is your final terah object:") console.log(terah)
//Here is your final terah object: VM132475:2
//Object {name: "Terah", age: 32, height: 66, weight: 125, hairColor: "brown..."}






// __________________________________________
// Reflection: Use the reflection guidelines
// 
// Took me a very long tine to get throught this challenge. I am not confident in javascript competencies. Will 
// go through Javascript track on Codecademy to get more clarity. The reading materials that 
// Devbootcamp provided was somewhat helpful for me. I just need more practice in this subject area for some reason.
// this challenge was very tedious for me because I am having a little trouble with javascript. 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
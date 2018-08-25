// 1. CREATE OBJECT AND LIST KEY VALUE PAIRS
var varOne = {
  keyOne: "aValue",
  keyTwo: "bValue",
  keyThree: ["aArray", "bArray", "cArray"],
  arrayOne: ["bArray", "cArray"],
  keyFour: 10,
  keyFive: 5,
};

var four = varOne.keyFour

console.log("keyOne: " + varOne.keyOne);
console.log("keyThree: " + varOne.keyThree);
console.log("keyThree item 2: " + varOne.keyThree[1]);
console.log("keyFour = " + varOne.keyFour);
console.log("keyFour + keyFive = " + varOne.keyFour + varOne.keyFive);
console.log("keyFour + keyFive = " + parseInt(varOne.keyFour + varOne.keyFive))
console.log("variable four = " + four);


// if (keyThree = "aArray")
// var varTwo = {
//   keyFive: 5
// }

// 1. IF STATEMENTS FOR EACH ARRAY ITEM, TO PUSH INTO ANOTHER ARRAY
// arrOne = []
//
//
// if (arrayOne = "bArray") {
//   arrOne.push(arrayOne);
//   console.log("Toppings: " + arrOne);
// }
//
// if (arrayOne = "cArray") {
//   arrOne.push(arrayOne);
//   console.log("Toppings: " + arrOne);
// }
// // END 1
//
// var amount = arrOne.forEach(function(d) {
//   console.log("Topping: " + d)
// });
//
// console.log("Topping: " + amount);
//
// var total = arrOne.length
// console.log("number of toppings: " + total);
//
// function addToppings() {
//   for (var i = total; i <= arrOne.length; i++) {
//     return i * 2.00;
//   }
// }
//
// var sum = arrOne.forEach(function(total) {
//   return total * 2.00;
// })
//
//
// var addUp = addToppings(total);
// console.log("toppings cost = $" + addUp.toFixed(2));
// console.log(sum)
//
// console.log(arrOne.length);


// console.log(varOne);
// console.log("keyOne = " + varOne.keyOne);
// console.log("keyTwo = " + varOne.keyTwo);
// console.log("keyThree = " + varOne.keyThree);
// console.log("keyThree #2 = " + varOne.keyThree[1]);
// console.log("keyFour = " + varOne.keyFour);
// console.log("keyFive rounded to 2 = " + varTwo.keyFive.toFixed(2));
// console.log("keyFour + keyFive = " + parseInt(varOne.keyFour + varTwo.keyFive));

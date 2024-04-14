function hasTargetSum(array, target) {
  for (var a = 0; a < array.length - 1 ; a++) {
    for (var b = a + 1; b < array.length; b++) {
      if (array[a] + array[b] === target) {
        return true
      }
    }
  } 
    return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// write a  function called hasTargetSum
// let hasTargetSum take in 2 arguments : an array and a target
//add first number to each number in array, if not equal to target return false
//move to second number of array and add to each number of the array, if if not equal to target return false
// go thru the array like this and check if any 2 numbers add up to the target number
// return true if any pair does
/*
  Add written explanation of your solution here
array: [1,2,3], target(5)
if 1 + 2 != target, return false
if 1 + 3!= target, return false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", );

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

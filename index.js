function hasTargetSum(array, target) {
  // for(let i = 0; i < array.length; i ++){
  //   for(let j = i + 1; j < array.length; j++){
  //     if(array[j] + array[i]  === target) return true
  //   }
  // }
  // return false 
  
  const seenNumbers = {}
  console.log(seenNumbers)
  for(let i = 0; i < array.length; i++){
    const compliment = target - array[i]
    if(seenNumbers[compliment]) return true
    seenNumbers[array[i]] = true
  }
  return false

  // can refactor to for of loop in line 11 for(const number of array)
}


/* 
  Write the Big O time complexity of your function here
  quadratic timing finding the pair that sum is equal to the target integer 

  find compliment either by double iteration or searching key and finding 

  O(n^2) run time - solution 1 
  O(n) space - solution 1

  O(n) runtime -solution 2 
  O(n) space - solution 2 
*/

/* 
 [3,8,12,4,11,7] target sum 10 

 iterate over the array and find two #s that when added equal the target of 10

 3 + 7 = 10


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

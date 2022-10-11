// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//Solution

// BIG O => TİME COMPLEXITY => O(n^2) -- SPACE COMPLEXITY => O(1)

let nums = [1, 2, 3, 4, 3];

// function containsDuplicate(numbers) {
//   let duplicated = false;
//   nums = numbers.sort();
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) duplicated = true;
//     }
//   }

//   return duplicated;
// }

// BIG O => TİME COMPLEXITY => O(n) -- SPACE COMPLEXITY => O(1)
function containsDuplicateOn(numbers) {
  return numbers.length != new Set(numbers).size ? true : false;
}

console.log(containsDuplicateOn(nums));
//containsDuplicate(nums);

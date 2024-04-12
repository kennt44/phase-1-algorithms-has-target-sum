function hasTargetSum(nums, target) {
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      // Iterate through the array again starting from the next element
      for (let j = i + 1; j < nums.length; j++) {
          // Check if the sum of the current pair equals the target
          if (nums[i] + nums[j] === target) {
              return true; // If so, return true
          }
      }
  }
  return false; // If no such pair found, return false
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Output: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // Output: true
console.log(hasTargetSum([1, 2, 5], 4)); // Output: false

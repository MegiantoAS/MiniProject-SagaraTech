function maxProductOfThree(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // Calculate two possible products:
    // 1. The product of the three largest positive numbers
    const product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    
    // 2. The product of the two smallest (potentially negative) numbers and the largest positive number
    const product2 = nums[0] * nums[1] * nums[nums.length - 1];
  
    // Return the maximum of the two products
    return Math.max(product1, product2);
  }
  
  // Examples of using the maxProductOfThree function
  console.log(maxProductOfThree([1, 2, 3]));                 
  console.log(maxProductOfThree([-10, -10, 1, 3, 2]));     
  
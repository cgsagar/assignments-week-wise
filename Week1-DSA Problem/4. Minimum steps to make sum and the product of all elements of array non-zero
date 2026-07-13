//The Time complexity is O(n)

function arrayNonZeroSumProduct(nums){
    let sum = 0;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0) {
            nums[i] = nums[i] + 1;
            count ++;
        }
        console.log("NUMS",nums)
       sum = sum + nums[i];
    }
    if(sum === 0){
        count ++;
    }
  return count;
}

console.log(arrayNonZeroSumProduct([-1, -1, 0, 0, 0])); //Output is 3

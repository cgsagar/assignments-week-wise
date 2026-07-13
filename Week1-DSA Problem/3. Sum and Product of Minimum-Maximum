// Time complexity is O(n)

function MinMax(nums){
    let max = -Infinity;
    let min = Infinity;

  if (!nums || nums.length === 0) {
        return null;
    }

    for(let i=0; i<nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
        if(nums[i] < min){
            min = nums[i];
        }
    }
    const sum = max + min;
    const prod = max * min;
    return [sum, prod];
}

const findMinMax = MinMax([1,2,3,4,5,7])
console.log(findMinMax); [8,7]

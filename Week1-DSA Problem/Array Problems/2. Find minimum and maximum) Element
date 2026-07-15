//Best approach - Time complexity - O(n)

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
    return [min, max] ;
}

const findMinMax = MinMax([2, 4, 6, 199, 9, 8, 3, 0])
console.log(findMinMax);



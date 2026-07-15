//Approach 1 - Time complexity is O(n²) and Space complexity is O(1)
function twoSum(arr, target){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                count++;
            }
        }
    }
    return count;
}

console.log(twoSum([1, 5, 7, -1, 5], 6));


//Approach 2 - HashMap (Map in JavaScript) - Time complexity is O(n)
function twoSum(arr, target) {
    let map = new Map();
    let count = 0;

    for (let num of arr) {
        let complement = target - num;

        if (map.has(complement)) {
            count += map.get(complement);
        }

        map.set(num, (map.get(num) || 0) + 1);
    }

    return count;
}

console.log(twoSum([1, 5, 7, -1, 5], 6));


//Reference in Future for two sum with any one first pair - Time complexity is O(n)

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
}

console.log(twoSum([7,2,12,16], 14));




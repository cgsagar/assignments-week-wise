//Approach 1 - Time complexity - O(n logn)

function DutchProblem(arr){
    const arrProb = arr.sort((a, b)=>a-b);
    return arrProb;
}

console.log(DutchProblem([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1])) //Output is sorted

//Approach 2 - Time complexity - O(n) - 2 Pass approach
function DutchProblem(nums) {
    let count0 = 0, count1 = 0, count2 = 0;

    for (let num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    let i = 0;

    while (count0--) nums[i++] = 0;
    while (count1--) nums[i++] = 1;
    while (count2--) nums[i++] = 2;

    return nums;
}

//Approach 3 - Time complexity - One Pass approach



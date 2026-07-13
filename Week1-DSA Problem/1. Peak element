// Approach 1 - This is Brute Force approach Time complexity is O(n)

function peakElementArray(arr) {
    let n = arr.length;

    // First element
    if (n === 1 || arr[0] > arr[1]) {
        return true;
    }
    // Middle elements
    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return true; // First peak found
        }
    }
    // Last element
    if (arr[n - 1] > arr[n - 2]) {
        return true;
    }
    return false;
}

const findPeak = peakElementArray([1, 2, 4, 5, 7, 8, 3]);
console.log(findPeak);


//Approach 2 - Binary Search approach - Time complexity is O(log n),

function peakElementArray(nums) {

    if (!nums || nums.length === 0) return false;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return true;
}

console.log(peakElementArray([1, 2, 4, 5, 7, 8, 3])); // true


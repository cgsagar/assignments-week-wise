//Time complexity is O(n) and Space complexity is O(1)
function rotateArrayByOne(arr){
    const n = arr.length;
  if (n === 0) return arr;

  const last = arr[n - 1];          // 1. store last
  for (let i = n - 1; i > 0; i--) { // 2. shift right
    arr[i] = arr[i - 1];
  }
  arr[0] = last;                    // 3. put last at front
  return arr;
}

console.log(rotateArrayByOne([1, 2, 3, 4, 5]));



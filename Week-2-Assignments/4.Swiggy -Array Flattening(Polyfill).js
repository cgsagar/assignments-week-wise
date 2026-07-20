//Implement a polyfill for Array.prototype.flat(). Your implementation must handle the depth argument correctly.
//Flat By flat() will open up only one level
1. //Recursive Approach - This may cause call stack overflow since it stores information. Each recursive call gets pushed onto the stack.

Array.prototype.myFlat = function(depth){
    const output = [];
    function flattenArray(arr, currentDepth){
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && currentDepth > 0){
            flattenArray(arr[i], currentDepth === Infinity ? Infinity : currentDepth - 1);
        }
        else {
            output.push(arr[i])
        }
    }
    return output;
}
const result = flattenArray(this, depth);
return result;
}
const inputArray = [0,1,2,[3,4,[5,6]]];
console.log(inputArray.myFlat(1));


2. //Iterative Approach - Iterative approach to the Array.prototype.flat polyfill is important. It helps prevent call stack limits and manages memory better 
than recursion for deeply nested arrays.

Array.prototype.myFlatIterative = function(depth = 1) {
    const stack = this.map(item => [item, depth]).reverse();
    console.log("Stack --",stack)
    const result = [];

    while (stack.length) {
        const [item, currentDepth] = stack.pop();

        if (Array.isArray(item) && currentDepth > 0) {
            for (let i = item.length - 1; i >= 0; i--) {
                stack.push([
                    item[i],
                    currentDepth === Infinity
                        ? Infinity
                        : currentDepth - 1
                ]);
            }
        } else {
            result.push(item);
        }
    }

    return result;
};

const arrI = [1,2,3,[7,8,[9,[10]]]]
console.log(arrI.myFlatIterative(1))



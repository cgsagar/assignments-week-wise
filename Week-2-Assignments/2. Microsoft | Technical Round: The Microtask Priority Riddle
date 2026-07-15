
console.log('1 - Sync');

setTimeout(() => {
  console.log('2 - Macrotask');
}, 0);

async function asyncFn() {
  console.log('3 - Inside Async');
  await Promise.resolve();
  console.log('4 - After Await');
}

asyncFn();

Promise.resolve().then(() => {
  console.log('5 - Microtask');
});

console.log('6 - Sync End');

//The output for the above is in below Order:
1-Sync,
3 - Inside Async
6 - Sync End
4 - After Await
5 - Microtask
2 - Macrotask


Explain why the asyncFn behaves differently than a standard promise chain.

The behavior is not fundamentally different from a promise chain except the syntax and rest all stays the same.
async/await does not create a new scheduling mechanism. Under the hood, await uses promises and microtasks.

async/await is primarily syntactic sugar over Promises. The code after an await is scheduled as a microtask, 
similar to a .then() callback. Therefore, 
there is generally no difference in event-loop behavior; the main benefit is cleaner, more readable asynchronous code.

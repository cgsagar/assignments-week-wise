
Explain the reconciliation process. How do React.memo and useCallback help maintain referential equality across renders?

Ans: Reconciliation is React's diffing process where it compares the previous Virtual DOM with the new Virtual DOM and updates only the necessary parts of the real DOM.
 It compares the new render output with the old one, applies heuristics to match elements, and then commits the resulting changes to the DOM.

What React compares
React doesn’t diff the browser DOM directly; it compares two trees of React elements produced by your components. During an update, React re-runs the affected components, 
gets a new element tree, and checks it against the previous tree to determine what stayed the same, what changed, and what should be removed or added.
Reconciliation happens during the render phase, where React computes the changes. After that, the commit phase applies those changes to the actual DOM in one synchronous 
step, which is why the UI update is consistentonce it is visible. Since React 16, this render work is built on Fiber, which lets React pause, resume, and prioritize the work 
before committing it.

So the real DOM “looks like” a hierarchical tree of nodes, and DevTools is the easiest place to inspect it.


Example: Virtual Dom -> 
         {
  type: "h1",
  children: "Hello"
}
First Render 
Real DOM
<h1>Hello</h1>

Virtual Dom -> 
         {
  type: "h1",
  children: "Hello React"
}
Second  Render 
Real DOM
<h1>Hello React</h1>

Now react compares Hello with Hello React so react updated only text node instead of recreating whole Dom element. 



2. How do React.memo and useCallback help maintain referential equality across renders?
Ans: React.memo memoizes a component and performs a shallow comparison of its props. If the current props are referentially equal to the previous props, 
React skips re-rendering the component.
useCallback memoizes a function and returns the same function reference across renders until one of its dependencies changes.

Easy remember:

React.memo
    ↓
Stops Child component re-rendering
when props are unchanged

useCallback
    ↓
Keeps the same function reference
between renders

React.memo + useCallback
    ↓
Prevents unnecessary Child re-renders
when function props are passed


React.memo performs a shallow comparison of props by default.

Good example:
function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("Clicked");
  };
  return <Child onClick={handleClick} />;
}

Every time Parent re-renders:

const handleClick = () => {};

creates a new function.
Render 1 -> Ref A
Render 2 -> Ref B
Render 3 -> Ref C

RefA === RefB // false

With React.memo
const Child = React.memo(({ onClick }) => {
  console.log("Child Render");
  return <button onClick={onClick}>Click</button>;
});
If props are equal:
Skip Re-render

const obj1 = { name: "Vasanth" };
const obj2 = { name: "Vasanth" };

obj1 === obj2 // false

React.memo checks: obj1 === obj2 but it does not check obj1.name === obj2.name
So objects, arrays, and functions can cause re-renders even if their content looks identical.

With useCallback

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []); ->This wont rerender so no new reference would be created. So same reference


The below stops rerendering of the function and avoiding referential equality across renders

import React, { useState, useCallback } from "react";

// Memoized Child Component
const Child = React.memo(({ onClick }) => {
  console.log("Child Render");

  return (
    <button onClick={onClick}>
      Child Button
    </button>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  // Function reference remains same
  const handleClick = useCallback(() => {
    console.log("Child Button Clicked");
  }, []);

  console.log("Parent Render");

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Parent Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;


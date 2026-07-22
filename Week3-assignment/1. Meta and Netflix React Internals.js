
The interviewer wants to know why React Fiber was introduced and how it differs from the old Stack Reconciler.
Compare the internal implementation of the Stack Reconciler with the Fiber Reconciler. How does the Fiber “unit of work” enable interruptible rendering?

Ans: The Stack Reconciler used recursive synchronous traversal based on the JavaScript call stack. Once rendering started, 
it couldn't be paused, reprioritized, or resumed. Fiber replaced this model with a linked tree of fiber nodes where each node represents a unit of work. 
React processes these units incrementally and can yield control back to the browser between them. Because progress is stored in fibers rather than the call stack, 
React can pause, resume, abort, or prioritize rendering work, enabling interruptible rendering and modern concurrent features.

Old React uses Recursion likebelow: The old reconciler used the JavaScript call stack and recursive depth-first traversal.

Characteristics:

Recursive traversal
Synchronous
Non-interruptible
No prioritization
Blocks the main thread until completion

function render(node) {
  render(node.child1);
  render(node.child2);
  render(node.child3);
}

Once this starts, JS Call Stack owns execution JavaScript cannot pause a running recursive call halfway and work is broken in small chunks.
It must complete first.

Why Fiber Can Pause - This relies on Fiber nodes
Fiber stores work as objects.
React keeps track of:
Plain Text
Current Work
Next Work
Remaining Work

This breaks each component into each unit so if we change in one place and it cannot stop it execution it wont disturb basically correct

Best Example:

Stack Reconciler

Render started
Can't stop
Finish everything
Then handle input

Fiber Reconciler

Pause rendering
Handle user input
Resume rendering from Fiber C
This is possible because progress is stored in fiber objects instead of the JavaScript call stack. [devdispatc...bhalla.dev], [dev.to]



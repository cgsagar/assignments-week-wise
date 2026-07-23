
React's diffing algorithm (reconciliation) compares the previous Virtual DOM tree with the new one and determines the minimum changes needed to update the UI efficiently.

1. Elements of Different Types
When React compares two elements with different types, it assumes they represent completely different trees.
// Previous render
<div>
  <Counter />
</div>

// Next render
<span>
  <Counter />
</span>

Since div and span are different types, React:

Destroys the old div subtree.
Unmounts all child components.
Creates a new span subtree.
Mounts new child components.

As a result, any state in the removed subtree is lost.

Similarly:
// Previous
<UserProfile />

// Next
<AdminProfile />

Since the component types differ, React unmounts UserProfile and mounts AdminProfile from scratch.

2. Elements of the Same Type with Different Attributes
When two DOM elements have the same type, React reuses the existing DOM node and updates only the changed attributes.

// Previous
<div className="active" title="User"></div>

// Next
<div className="inactive" title="User"></div>
React:

Reuses the existing <div>.
Compares attributes.
Updates only className.
Leaves title unchanged.

This minimizes DOM operations and improves performance.


3. Same Component Type with Different Props
When the component type remains the same, React keeps the existing component instance and updates its props.
// Previous
<UserProfile name="Alice" />

// Next
<UserProfile name="Bob" />
React:

Reuses the existing UserProfile component.
Updates the props.
Re-renders the component.
Preserves the component's state.


4. Role of Keys in Reconciliation
Keys help React identify elements across renders, especially in lists.
<UserProfile key="1" name="Alice" />
<UserProfile key="2" name="Bob" />
React sees:

Same component type ✅ (UserProfile)
Different key ❌ (1 → 2)
Because the key changed, React assumes the old component and new component are different identities.
What happens:

Unmount old UserProfile (key="1")
Destroy its state
Create a new UserProfile (key="2")
Pass name="Bob"
Run mount lifecycle/hooks again

So final answer is 
 if only name changes and the key stays the same, React only updates the prop. But if the key changes, React completely unmounts the old component and mounts a new one.



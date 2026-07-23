
useEffect runs asynchronously after the browser has painted the UI, making it suitable for API calls, subscriptions, and side effects that don't affect layout. 
useLayoutEffect runs synchronously after React updates the DOM but before the browser paints. 
It is useful when we need to measure or modify layout before the user sees the screen. 

A common use case is tooltip or modal positioning, where synchronous layout measurement prevents visual flickering and 
ensures the UI is rendered in the correct position from the first paint.

Simple difference
useEffect: runs later, after paint, so it won’t delay what the user sees.

useLayoutEffect: runs sooner, after DOM changes but before paint, so it can measure layout and update it without flicker.

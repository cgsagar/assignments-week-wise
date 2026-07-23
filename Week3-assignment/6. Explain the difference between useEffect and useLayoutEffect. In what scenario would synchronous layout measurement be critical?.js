
useEffect runs asynchronously after the browser has painted the UI, making it suitable for API calls, subscriptions, and side effects that don't affect layout. 
useLayoutEffect runs synchronously after React updates the DOM but before the browser paints. 
It is useful when we need to measure or modify layout before the user sees the screen. 

A common use case is tooltip or modal positioning, where synchronous layout measurement prevents visual flickering and 
ensures the UI is rendered in the correct position from the first paint.

Simple difference
useEffect: runs later, after paint, so it won’t delay what the user sees.

useLayoutEffect: runs sooner, after DOM changes but before paint, so it can measure layout and update it without flicker.



When layout measurement matters
Synchronous layout measurement is critical when you need the exact size or position of an element before the user sees the page change. 
For example, measuring an element’s height to place a tooltip, dropdown, or popup correctly, or adjusting something before it would visibly jump.
Easy rule
If you don’t need to measure the DOM right away, use useEffect. If you must measure or adjust layout immediately to avoid flicker or incorrect positioning, 
use useLayoutEffect.


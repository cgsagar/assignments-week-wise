
//Approach - This is the current Approach I am following.
function deepClone(value, map = new WeakMap()) {
  // 1. Base case: primitives, functions, and null are returned as-is
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 2. If we've already cloned this object, return the cached clone (handles circular refs)
  if (map.has(value)) {
    return map.get(value);
  }

  // 3. Create the right “shell” (array or plain object)
  const clone = Array.isArray(value) ? [] : {};

  // Important: store in map *before* recursing, to break cycles
  map.set(value, clone);

  // 4. Recursively copy own enumerable properties
  for (const key of Object.keys(value)) {
    clone[key] = deepClone(value[key], map);
  }

  return clone;
}

const original = {
  a: 1,
  b: { c: 2 },
  d: [11, 7],
};
original.self = original; // Circular reference!

const copy = deepClone(original);
console.log(copy!== original); // true
console.log(copy.b!== original.b); // true
console.log(copy.self === copy); // true (circularity preserved)

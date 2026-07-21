function isDeepEqual(obj1, obj2) {
  // Same reference or same primitive value
  if (obj1 === obj2) {
    return true;
  }

  // Handle null cases
  if (obj1 === null || obj2 === null) {
    return false;
  }

  // If either is not an object, they are not equal
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  // Get keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Different number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare each key recursively
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!isDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

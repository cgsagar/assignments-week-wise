function myInstanceOf(obj, constructorFn) {
  // Primitives cannot have a prototype chain
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return false;
  }

  let proto = Object.getPrototypeOf(obj);

  while (proto !== null) {
    if (proto === constructorFn.prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto); //not internally becomes proto = Object.getPrototypeOf(Person.prototype); and now it is proto = Object.prototype
  }

  return false;
}

function Person(name) {
  this.name = name;
}

const p = new Person("John");

console.log(myInstanceOf(p, Person)); // true
console.log(myInstanceOf(p, Object)); // true
console.log(myInstanceOf(p, Array));  // false


The instanceof operator checks whether a constructor's prototype object exists anywhere in an object's prototype chain. 
  To replicate it, we start from the object's prototype using Object.getPrototypeOf(), traverse upward through the prototype chain, and 
  compare each prototype with constructorFn.prototype. If a match is found, return true; if the chain reaches null, return false.

  Start from object's prototype
       ↓
Does it match Constructor.prototype?
       ↓
No
       ↓
Move up one level
       ↓
Does it match?
       ↓
No
       ↓
Move up again
       ↓
...
       ↓
Reached null?
       ↓
Yes → return false

instanceof traverses an object's prototype chain using Object.getPrototypeOf(), comparing each prototype with the constructor's 
prototype property. If a match is found it returns true; if the chain reaches null, it returns false.





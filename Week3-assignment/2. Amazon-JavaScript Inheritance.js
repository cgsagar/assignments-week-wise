What is the difference between classical and prototypal inheritance? Explain how you would extend a built-in object like Array.

Classical inheritance is class-based: you define a class as a blueprint, then create instances from it, and subclasses inherit from parent classes. 
Prototypal inheritance is object-based: one object directly delegates to another object through the prototype
JavaScript's class syntax is syntactic sugar over its underlying prototypal inheritance model.

Main difference
Classical inheritance centers on classes and instances.
Prototypal inheritance centers on objects and delegation.
In JavaScript, property lookup walks up the prototype chain when a property is not found on the object itself.

If asked:

Can we use Array.prototype instead of class CustomArray extends Array?

You can say:

"Yes, we can add methods directly to Array.prototype, but that modifies the global Array object and affects every array in the application. 
This can lead to naming conflicts and unintended side effects. Using class CustomArray extends Array is generally safer because the additional behavior is limited to 
instances of the custom class."
  
  
Ans: Extending Array means adding additional behavior or methods to the existing Array functionality, either through Array.prototype or by creating a custom class using 
class MyArray extends Array.
  
Create my own Array class that has all Array features plus my custom methods. So my object has getFirst and getLast methods

class CustomArray extends Array {
  getFirstElement() {
    return this[0];
  }

  getLastElement() {
    return this[this.length - 1];
  }
}

const arr = new CustomArray(10, 20, 30);

console.log(arr.getFirstElement()); // 10
console.log(arr.getLastElement());  // 30

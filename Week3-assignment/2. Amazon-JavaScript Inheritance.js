What is the difference between classical and prototypal inheritance? Explain how you would extend a built-in object like Array.




Extending Array means adding additional behavior or methods to the existing Array functionality, either through Array.prototype or by 
creating a custom class using class MyArray extends Array.
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

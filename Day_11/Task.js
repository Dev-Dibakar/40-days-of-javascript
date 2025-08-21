//1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); //1 
counter(); // 2
//closer close the count value


//2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); //100 , closer close the x value


//3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}
setupButton();


//4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(multiplier) {
    return function multiply(num) {
        return multiplier * num;
    };
}

const Multiple = createMultiplier(5);
console.log(Multiple(2)); // Output: 10

//5. What happens if a closure references an object?

function student(){ //it will close the object values.
  let profile = { name : "Dibakar", age : 18 }
  return function UpdateProfile(nameup,Update){ 
       profile.age = Update;  
       profile.name = nameup;
       console.log("Name: ",profile.name, "Age: ",profile.age); 
  }; 
}

const student1 = student();
student1("dibakar",29);
console.log(student1("Ovi",20));

//6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
function Counter(){
  let count = 0 ;
  return {
    increment : () =>{
      return ++count;
    },
    decrement : () => {
      return --count;
    },
    reset : () => {
      return count = 0;
    }
  };
}

const counterVAlue = Counter();
console.log(counterVAlue.increment());
console.log(counterVAlue.increment());
console.log(counterVAlue.reset());

// 1. Global Execution Context (GEC)
// In this case, it behaves as the window object.
console.log('In the Global Execution Context this = window', this, this === window); // window, true

// 2. Inside an Object or a Method (Binding)
// In this scenario, the this keyword returns the object itself.
// When we invoke a method from an object, the this keyword refers to the object in which the method is invoked.
// Implicit binding refers to the scenario where we invoke a method using dot notation,
// and the this keyword is bound to the object on which the method is called.

const employee = {
  name: 'Alex',
  jobTitle: 'HR',
  salary: 300,

  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `${this.name}, ${this.jobTitle}, ${this.salary}`;
  },
};

console.log(employee.returnThis()); // Returns the employee object.
console.log(employee.getFullName());

// Using implicit binding by passing an object as an argument
const tom = {
  name: 'Tom',
  age: 7,
};
const jerry = {
  name: 'Jerry',
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old.`);
  };
  console.log(obj);
}

greetMe(tom);
tom.logMessage(); // Tom is 7 years old.

greetMe(jerry);
jerry.logMessage(); // Jerry is 3 years old.

// 3. Inside a Function

// 3.1. Standalone Function
// When a function is not linked with an object, the this keyword returns the window object
// or undefined in strict mode.

function sayName() {
  console.log('This is inside a function', this);
}
sayName(); // Prints the window object

// 3.2. Nested Function
// The behavior is the same as using a standalone function.

function outer(a) {
  console.log('This is inside an outer function', this);

  return function inner(b) {
    console.log('This is inside an inner function', this);
  };
}

const outerResult = outer(5); // window
outerResult(3); // window

// 3.3. Inside Arrow Function
// In arrow functions, the this keyword is bound to the parent scope in which it's defined.
// If defined in the global scope, the parent is the window object.

'use strict';
const getFood = () => this;
console.log('this inside the Arrow function defined in global scope', getFood()); // window

// Arrow function inside an object
const food = {
  name: 'mango',
  color: 'yellow',

  getDesc: function () {
    return `${this.name} is ${this.color}`;
  },
};

console.log(food.getDesc());

// Fix using arrow function one level down
'use strict';
const food2 = {
  name: 'mango',
  color: 'yellow',

  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

const descFunc = food2.getDesc();
console.log(descFunc());

// 4. Explicit Binding
// Explicit binding is a way to attach a standalone function to an object
// and control how the this keyword behaves using call, apply, and bind.

// 4.1. call
function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: 'Natasha',
  address: '10 Merlon, Santiago',
};

greeting.call(user); // Passing the object to bind

// call with arguments
'use strict';
const likes = function (hobby1, hobby2, hobby3) {
  console.log(`${this.name} likes ${hobby1}, ${hobby2} and ${hobby3}`);
};

const person = {
  name: 'Habbas',
};

likes.call(person, 'Teaching', 'Blogging', 'Playing soccer.');

// 4.2. apply
// apply works like call but takes arguments as an array

'use strict';
const hobbiesToApply = ['Sleeping', 'Eating', 'Playing'];
likes.apply(person, hobbiesToApply);

// 4.3. bind
// bind returns a new function with this bound to the object

'use strict';
const newHobbies = function (hobby1, hobby2, hobby3) {
  console.log(`${this.name} likes ${hobby1}, ${hobby2} and ${hobby3}`);
};

const officer = {
  name: 'Bob',
};

const newFunction = newHobbies.bind(officer, 'Sleeping', 'Eating', 'Playing');
newFunction();

// 5. Constructor Function
// Constructor functions use the new keyword to create new objects

'use strict';
const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + ' is a ' + this.animal);
  };
};

const tomCartoon = new Cartoon('Tom', 'Cat');
const jerrCartoon = new Cartoon('Jerry', 'Mouse');

tomCartoon.log();
jerrCartoon.log();







/*
    2. What is the problem here? Fix it to log the correct name and explain the fix

    const user = {
    name: "tapaScript",
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    },
    };

    user.greet();

*/

/* 
    In that code greet have a arrow function, arrow function dosen't have any 
    own 'this' so it inheirt it from the  lexical scope.
*/

const user = {
  name: "tapaScript",
  greet: function () {
    return `Hello, ${this.name}!`
  },
};

console.log(user.greet());

/*
    3. Can you explain what is the problem here and fix the issue to log the correct name?
    const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
    };

    const greetFn = obj.greet;
    greetFn();

/*
    in that code, greetfn have the greet function but not have the obj name.
    so we have to use Explicit binding by using call .
*/
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn.call(obj);

/*
    4. What is the problem with the following code? Why isn't it logging the name correctly?

const user = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
*/

/*
    In that code inner() is a StandAlone function, that's why 'this' is binding with 
    window object or if it strict mode it will 'undefined'
*/

const user = {
  name: "Alex",
  greet: function () {
    const inner = () => {
        console.log(`Hello, ${this.name}!`)
    }
    inner();
  },
};

user.greet();

/* 
    5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword.
     Then, create two sports instances and log their details

*/

const Sports = function(name,number){
    this.name = name;
    this.number = number;
    this.log = function(){
        console.log( this.name + ' nubmer is ' + this.number)
    }
}

const player1 = new Sports("Dibakar",242);
player1.log();

const player2 = new Sports("Tapas", 241);
player2.log();

/* 
    6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
*/

const car1 = {
    brand : "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    },
};

const car2 = {
    brand : "BMW",
    model : "X1",
};

const display = car1.describe;
display.call(car1);

const displayy =  car1.describe;
displayy.call(car2);

/**  
    7. What will be the output of the following code and why?

const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
Options are:

A: "Charlie" and "Charlie"
B: "Charlie" and undefined
C: "Charlie" and "" (empty string)
D: undefined and "Charlie"
 */

/*
    Correct: B
    beacause sayHello function this bind with person by the conpet of implicit bindin.
    another function which is SayHelloArrow a arrow function, arrow function dosen't 
    have their worn this, they found it in the lexical scope. here 'undefined' comes.
*/
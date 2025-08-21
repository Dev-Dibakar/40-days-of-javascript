//TASk: 1
//1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer(); //output TDZ reference error


//Task: 2------------------------------------------------------------------------------------------------------
//What is the mistake in the code below?
let total = 0;

function add(num) {
    total += num;
}

//add(5);
//add(10);
console.log(total);
// here total can be manopulated as it's global.
// best practice

function add(sum,num){
    return sum+num;
}
//add(total,5);
//add(total,10);

//Task: 3 ----------------------------------------------------------------------------------------------------------
//Create a function with a nested function and log a variable from the parent function.
function Outer_print(){
    var a = 5;
    function Inner_print(){
        console.log(a);
    }
    Inner_print();
}

//Task: 4 ----------------------------------------------------------------------------------------------------------
// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function test(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // will get reference error;
}
//test();

//Task: 5----------------------------------------------------------------------------------------------------------
// Write a function that tries to access a variable declared inside another function

function ex1(){
    var a = 5;
    console.log(a);
}

function ex2(){
    console.log(a);
}

//ex1();
//ex2();

//task 6 ------------------------------------------------------------------------------------------------------------
// What will be the output and why?
//console.log(a); //can't access a  at TDZ
let a = 10; 

//task 7 ------------------------------------------------------------------------------------------------------------
//Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age); //B: Only inside showAge

}
console.log(age);

//task 8 ------------------------------------------------------------------------------------------------------------
// What will be the output and explain the output?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message); //output message hi
    }

    inner();//because in js first find the nearest scope
}

outer();

//task 9 ------------------------------------------------------------------------------------------------------------
//What will be the output and why?
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x); //Inner
    }

    inner(); // because in js first find the nearest scope
}

outer();

//task 10 ------------------------------------------------------------------------------------------------------------
//What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); //-1
reduce(); //-2
//Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

function example(){
    console.log(a); //refference error , TDE Starts for a,b,c
    console.log(b); //refference error 
    console.log(c); //refference error

    let a = 5; //TDE ends for a
    let b = 6; // TDE ends for b
    const c = 7; // TDE ends for c
}

//example();


//2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

//Variable Hoisting

console.log("a: ",a);
console.log("Now initializing a..");
var a = 5;
console.log("a: ",a);

//Function Hoisting

calculate();

function calculate(){
    let a,b;
    a = 5;
    b = 5;
    console.log("Summation of a & b is : ", a+b);
}
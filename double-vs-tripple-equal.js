// Well in short: == inherently converts type and === does not convert type.
let firstStr = "";
let secondStr = false;

if(firstStr == secondStr) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

if(firstStr === secondStr) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}




let num1 = 5;
let num2 = 5;
if(num1 == num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

// Double Equals (==) checks for value equality only

num1 = 5;
num2 = "5";

if(num1 == num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

// Tripple Equals (==) checks for both the same value and the same type equality 
num1 = 7;
num2 = "7";

if(num1 === num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

num1 = 0;
num2 = false;
if(num1 == num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

num1 = 0;
num2 = false;
if(num1 === num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

num1 = 1;
num2 = true;
if(num1 == num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

num1 = 1;
num2 = true;
if(num1 === num2) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
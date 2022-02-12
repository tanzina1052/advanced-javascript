// Falsy Value
// 0, -0, 0n(BigInt),'',"", ``
// Any value without 0 is truthy value
let age = 0;
console.log(age);
if (age) {
    console.log("true");
}
else {
    console.log("false");
}

let fName = "Tanzina";
// Any string without empty string is truthy value

console.log(fName);

// "" Empty string is falsy value
fName = "";

console.log(fName);
if(fName) {
    console.log("true");
}
else {
    console.log("false");
}

fName = " ";
// string with space is truthy value

console.log(fName);
if (fName) {
    console.log("true");
}else {
    console.log("false");
}

fName = "0";
// Value string 0 is truthy value

console.log(fName);

if (fName) {
    console.log("true");
}else {
    console.log("false");
}

fName = "false";
// Value false string is truthy value

console.log(fName);

if (fName) {
    console.log("true");
}else {
    console.log("false");
}
let num;
//Value undefined is falsy value

console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = null;
// null is falsy value

console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = false;
// Value false is falsy value

console.log(num);

if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = NaN;
// Value NaN is falsy value

console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = 5/"mango";
console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = [];
//Value empty array is truthy value

console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

num = {};
// Value empty object is truthy value
console.log(num);
if (num) {
    console.log("true");
}else {
    console.log("false");
}

function add() {}
// empty function is always truthy value
console.log(add);


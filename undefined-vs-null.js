// Getting undefined in different ways
let fName;
// without initializing value,  a variable value is undefined
console.log(fName);

// If we set undefined as a variable value, it returns undefined
fName = undefined;
console.log(fName)


// without return, a function is undefined
function add(num1, num2) {
    console.log(num1 + num2);
    return
}
 const result = add(12, 23);
 console.log(result);


// without passing arguments, a function is undefined
function addNum (num1,num2) {
    console.log(num2);

}

const result2 = addNum(20);
console.log(result2);


// An unexisting array element returns undefined
const person = ["Robert", "blue", 30];
console.log(person[5]);


// Without defining an object property, it returns undefined
let friend = {fName: "Jonh", lName: "Doe", age: 45};
console.log(friend.eyeColor);

// If we set null as a value, it returns null
// It is totally intentionall
friend = null;
console.log(friend);
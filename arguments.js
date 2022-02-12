// Arguments is an array like object.

function add(num1,num2) {
    console.log(arguments);
    console.log([...arguments]);
    return num1 + num2;
     
}
const result = add(5,5,5,7);
console.log(result);
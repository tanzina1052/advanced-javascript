const numbers =[5, 7, 8, 25, 30];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


const numbers2 = [3, 4, 6, 9, 11, 15];
function square(element) {
    return element * element;
} 
const result = numbers2.map(square);
console.log(result);


const numbers3 = [2, 4, 6, 10, 12, 16];
const result2 = numbers3.map(element => element * element);
console.log(result2);

const numbers4 = [5, 8, 13, 17, 19];
const result3 = numbers4.map(x => x * x);
console.log(result3);

const larger = numbers4.filter(element => element > 10)
console.log(larger);
const smaller = numbers4.filter(element => element < 10);
console.log(smaller);
const isExist = numbers4.find(element => element > 10);
console.log(isExist);
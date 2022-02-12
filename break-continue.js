const nums = [1,2,3,4,5,6,7,8,9];
console.log(nums);

for (let i = 0; i < nums.length; i++) {
    
    if (nums[i] > 4) {
        break;
    }
    console.log(nums[i]);
}



const numbers = [2, 3, -6, 8, -9, 10];

for(let i = 0; i < numbers.length; i++) {
    
    if (numbers[i]< 0) {
        continue;
    }
    console.log(numbers[i]);
}
// slice, splice and join array methods

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = nums.slice(3,6);
console.log(part);
console.log(nums);

const removed = nums.splice(2,4, 10,11);
console.log(removed);
console.log(nums);

// inside string, a separator will be add, default separator is comma
const combined = nums.join(" ");
console.log(combined);
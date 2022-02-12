// Applying map, filter and find methods on array of objects
const students = [
{id: 12, name: "Rahman"},
{id: 15, name: "Sana"},
{id: 20, name: "Sumona"},
{id: 30, name: "Jalal"}
];

const names = students.map(stud => stud.name);
console.log(names);
const ids = students.map(stud => stud.id);
console.log(ids);

const bigger = students.filter(stud => stud.id > 12);
console.log(bigger);

const biggerOne = students.find(stud => stud.id > 12);
console.log(biggerOne);
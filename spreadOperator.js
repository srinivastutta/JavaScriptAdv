// Example 1

const a = [1, 2, 3, 4, 5, 6, 7];
const b = [5, 9, 10];

console.log(a.concat(...b));

// Example 2

let obj1 = {
  a: "JavaScript",
  b: "Java",
};

let obj2 = {
  obj1,
  c: "DotNet",
  d: "Phython",
};

console.log(obj2); // { obj1: { a: 'JavaScript', b: 'Java' }, c: 'DotNet', d: 'Phython' }
// When calling without ...spread operator, its printing whole object from obj1 and then concat with rest of the properties from obj2

// Example 3

let obj4 = {
  a: "JavaScript",
  b: "Java",
};

let obj5 = {
  ...obj1,
  c: "DotNet",
  d: "Phython",
};

console.log(obj5); // { a: 'JavaScript', b: 'Java', c: 'DotNet', d: 'Phython' }
// When calling ...spread operator, its printing properties from obj1 and then concat with rest of the properties from obj2
//  Its returning all the properties from obj1 and obj2 in one object

// Example 3

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 4, 3];

console.log(sum(...numbers)); //10
// when we use ...spread operators, it will only take the numbers from array.  It will NOT TAKE complete array

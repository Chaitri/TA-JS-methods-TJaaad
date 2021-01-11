let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
console.log('Average grade:' , 
  persons.reduce( (acc, person) => { return acc + person.grade}, 0) / persons.length
);

// Find the average grade of male
let maleStudents = persons.filter( person => person.sex === 'M');
console.log('Average male grade:' , 
  maleStudents
  .reduce( (acc, person) => { return acc + person.grade}, 0) / maleStudents.length
);

// Find the average grade of female
let femaleStudents = persons.filter( person => person.sex === 'F');
console.log('Average female grade:' , 
femaleStudents
  .reduce( (acc, person) => { return acc + person.grade}, 0) / femaleStudents.length
);

// Find the highest grade
console.log('Highest grade:', 
  persons.map( person => person.grade)
  .sort( (a,b) => a - b)
  .pop()
);

// Find the highest grade in male
console.log('Highest male grade:', 
  maleStudents.map( person => person.grade )
  .sort( (a,b) => a - b)
  .pop()
);

// Find the highest grade in female
console.log('Highest female grade:', 
 femaleStudents.map( person => person.grade )
  .sort( (a,b) => a - b)
  .pop()
);

// Find the highest grade for people whose name starts with 'J' or 'P'
let filteredStudents = persons.filter( person => person.name.startsWith('J') || person.name.startsWith('P'));
console.log('Highest grade for people whose name starts with "J" or "P":',
  filteredStudents.map( person => person.grade)
  .sort((a, b) => a - b)
  .pop()
);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let fruitsObj = {};
fruitBasket.forEach(fruit => {
  if(fruitsObj[fruit]) fruitsObj[fruit] += 1;
  else fruitsObj[fruit] = 1;
});

//Using reduce:

let fruitsObjNew = {};
fruitBasket.reduce( (acc, fruit) => {
  if(fruitsObjNew[fruit]) fruitsObjNew[fruit] += 1;
  else fruitsObjNew[fruit] = 1;
}, {})

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let fruitsArr = []
for(let key in fruitsObj) {
  fruitsArr.push([key, fruitsObj[key]]);
}

//Using reduce:

let fruitsArr1 = Object.keys(fruitsObj).reduce( (acc, cv) => 
  acc.concat([[ cv , fruitsObj[cv]]]) 
,[]);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

console.log( data.reduce( (acc, cv) => {
  acc = acc.concat(cv);
  return acc;
}, []) );

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
console.log(dataTwo.reduce( (acc,cv) => {
  acc = acc.concat(cv.flat(Infinity))
  return acc;
},[]));

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(number) {
  return number + 1;
}

function double(number) {
  return number * 2;
}

function decrement(number) {
  return number - 1;
}

function triple(number) {
  return number * 3;
}

function half(number) {
  return Math.round(number / 2);
}


let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

console.log( pipeline.reduce((result, func) => { return func(result) }, 3));

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

console.log( pipeline2.reduce((result, func) => { return func(result) }, 8));
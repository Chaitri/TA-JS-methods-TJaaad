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

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.map( person => person.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade =  persons.map( person => person.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map( person => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log( peopleName.filter( name => name.startsWith('J') || name.startsWith('P')));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log( peopleName.filter( name => {
  return name.startsWith('A') || name.startsWith('C')
}).length);

// Log all the filtered male ('M') in persons array
console.log( persons.filter( person => person.sex === 'M'));

// Log all the filtered female ('F') in persons array
console.log( persons.filter( person => person.sex === 'F'));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log( persons.filter( person => {
  if( person.sex === 'F') {
    if(person.name.startsWith('C') || person.name.startsWith('J')) 
      return true;
  }
}));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(grade => grade % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
console.log( persons.find( person => person.name.startsWith('J')));

// Find the first name that starts with 'P' in persons array and log the object
console.log( persons.find( person => person.name.startsWith('P')));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log( persons.find( person => 
  person.name.startsWith('J') && person.grade > 10 && person.sex === 'F'
));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter( person => person.sex === 'F');

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter( person => person.sex === 'M');

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce( (accumulator, grade) => accumulator + grade, 0);

// Find the average grade
console.log(`Avg grade: ${gradeTotal / peopleGrade.length}`);

// Find the average grade of male
let maleAvgGrade = malePersons.reduce( (accumulator, person) => {
  return accumulator = accumulator + person.grade;
},0) / malePersons.length;

// Find the average grade of female
let femaleAvgGrade = femalePersons.reduce( (accumulator, person) => {
  return accumulator = accumulator + person.grade;
},0) / femalePersons.length;

// Find the highest grade
function sortAsc( a , b) {
  return a - b;
}
console.log(`Highest grade: ${[...peopleGrade]
  .sort(sortAsc)
  .pop()}`
);

// Find the highest grade in male
let maleGrades = malePersons.map(person => person.grade);
console.log('Highest among M:', maleGrades
  .sort(sortAsc)
  .pop()
);

// Find the highest grade in female
let femaleGrades = femalePersons.map(person => person.grade);
console.log('Highest among F:', femaleGrades
  .sort(sortAsc)
  .pop()
);

// Find the highest grade for people whose name starts with 'J' or 'P'
console.log('Highest among people whose name starts with "J" or "P":', 
  persons.filter( person => person.name.startsWith('J') || person.name.startsWith('P'))
  .map(person => person.grade)
  .sort(sortAsc)
  .pop()
);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort(sortAsc);
console.log(peopleGrade);

//Yes array was modified

// Sort the peopleGrade in descending order
function sortDesc(a, b) {
  return b - a;
}

peopleGrade.sort(sortDesc);
console.log(peopleGrade);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

console.log( [...peopleGrade].sort(sortDesc) );

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
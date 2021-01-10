// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.
Clone the array before using sort method: [...arr]
*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentance"
strings.push('called', 'sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
let wordsWithIs = strings.filter( word => word.includes('is'));

// - Find all the words that contain 'is' use string method 'indexOf'
let wordsWithIsAgain = strings.filter( (word, index) => {
  return strings.indexOf('is') == index;
});

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log( numbers.every( number => number % 3 === 0 ));

// -  Sort Array from smallest to largest
console.log([...strings].sort());
console.log([...numbers].sort( (a,b) => a - b));

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
let largest = numbers[0];
numbers.forEach( number => {
  if(number > largest) {
    largest = number;
  }
});

// - Find longest string in strings
let longestWord = strings[0];
strings.forEach( word => {
  if(word.length > longestWord.length) {
    longestWord = word;
  }
});

// - Find all the even numbers
console.log( numbers.filter( num => num % 2 === 0 ) );

// - Find all the odd numbers
console.log( numbers.filter( num => num % 2 !== 0 ) );

// - Place a new word at the start of the array use (unshift)
strings.unshift('NewWord');

// - Make a subset of numbers array [18,9,7,11]
let numSubset = numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']
let stringSubset = strings.slice(2,4);

// - Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;

// - Replace words in strings array with the length of the word
strings.forEach( (word, index) => {
  strings[index] = word.length;
})

// - Find the sum of the length of words using above question
let sum = strings.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
console.log(customers.forEach( customer => {
  if(customer.firstname.startsWith('J')) { 
    console.log(customer.firstname); 
  }
}));

// - Create new array with only first name
let names = [];
customers.forEach( customer => names.push(customer.firstname));

// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = [];
customers.forEach( customer => {
  let fullName = customer.firstname + ' ' + customer.lastname;
  fullNames.push(fullName);
});

// - Sort the array created above alphabetically
fullNames.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelName = [fullNames.find( name => {
  return name.includes('a') || name.includes('e') || name.includes('i') || name.includes('o') || name.includes('u');
})];
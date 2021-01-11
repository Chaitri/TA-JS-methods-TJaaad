let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  let longestWord = words[0];
  words.forEach( word => {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// - Convert the above array "words" into an array of length of word instead of word.
let wordLengths = words.map( word => word.length);

// - Create a new array that only contains word with atleast one vowel.
let wordsWithVowel = words.filter( word => {
  return word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') ||
  word.includes('i');
});

// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));

// - Create a new array that contians words not starting with vowel.
let startsWithoutVowel = words.filter( word => {
  return !(word.startsWith('a') || word.startsWith('e') || word.startsWith('i') || word.startsWith('o') ||
  word.startsWith('i'));
});

// - Create a new array that contians words not ending with vowel
let endsWithoutVowel = words.filter( word => {
  return !(word.endsWith('a') || word.endsWith('e') || word.endsWith('i') || word.endsWith('o') ||
  word.endsWith('i'));
});

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
  return numbers.reduce( (acumulator, number) => acumulator + number , 0);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mulBy3 = numbers.map( number => number * 3);

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter( number => number % 2 === 0);

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter( number => number % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
let isEvenNumbers = numbers.map( number => {
  if( number % 2 === 0) return true;
  else return false;
});

// - Sort the above number in assending order.
numbers.sort( (a, b) => a - b);

// - Does sort mutate the original array?
// Yes

// - Find the sum of the numbers in the array.
console.log(`Sum: ${sumArray(numbers)}`);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(numbers) {
  let sum = numbers.reduce( (acumulator, number) => acumulator + number , 0);
  let avg = sum / numbers.length;
  return avg;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(strings) {
  let totalWordsLength = strings.reduce( (accumulator, word) => {
    return accumulator + word.length;
  }, 0);
  let avgWordLength = totalWordsLength / strings.length;
  return avgWordLength;
}
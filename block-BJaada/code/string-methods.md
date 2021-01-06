Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: none
   - Return: new string with all characters in uppercase
   - Example:
     ```js
     let flower='sunflower';
     flower.toUpperCase(); // 'SUNFLOWER'
     ```
   - `toUpperCase` returns a new string in uppercase. Original string is not changed.

3. `toLowerCase`

   - Parameter: none
   - Return: new string with all characters in lowercase
   - Example:
     ```js
     let flower='SunFLower';
     flower.toLowerCase(); // 'sunflower'
     ```
   - `toLowerCase` returns a new string in lowercase. Original string is not changed.

4. `trim`

   - Parameter: none
   - Return: new string with whitespace removed both from the start and end of a string
   - Example:
     ```js
     let name='     John ';
     name.trim(); // 'John'
     let sentence = ' A          warm day    in July        ';
     sentence.trim(); // 'A          warm day    in July'
     let animal = 'Cat       ';
     animal.trim(); // 'Cat'
     ```
   - `trim` returns a new string where extra spaces have been removed from both the start and end of the string. Original string is not changed.

5. `trimEnd`

   - Parameter: none
   - Return: new string with whitespace removed from only the end of a string
   - Example:
     ```js
     let name='     John       ';
     name.trimEnd(); // '     John'
     let sentence = 'An example       ';
     sentence.trimEnd(); // 'An example'
     ```
   - `trimEnd` returns a new string where extra spaces have been removed from only the end of a string. Original string is not changed.

6. `trimStart`

   - Parameter: none
   - Return: new string with whitespace removed from only the start of a string
   - Example:
     ```js
     let name='     John       ';
     name.trimStart(); // 'John       '
     let sentence = '           An example';
     sentence.trimStart(); // 'An example'
     ```
   - `trimStart` returns a new string where extra spaces have been removed from only the start of a string. Original string is not changed.

7. `concat`

   - Parameter: at least one string passed, can have multiple
   - Return: new string containing combined text
   - Example:
     ```js
     let str = 'Cat';
     let anotherStr='In the Hat';
     str.concat(' ',anotherStr); // "Cat In the Hat"
     'Hello,'.concat(' World'); // 'Hello, World'
     'Age: '.concat(20); // "Age: 20"
     ```
   - `concat` returns a new string which contains the combined text of calling string and the string(s) passed in argument. If arguments are not of string type, it is converted to string values.
   
8. `endsWith`

   - Parameter: the characters to search, -optional length value which defaults to string length
   - Return: true if characters are found at end of string, else returns false
   - Example:
     ```js
     let sentence = 'Another day by the ocean';
     sentence.endsWith('ocean'); // true
     'Cat'.endsWith('t'); // true
     sentence.endsWith('ocean', 12); // false
     ```
   - `endsWith` returns true/false depending whether the calling string ends with the characters passed in argument. If length value provided, then it will only search till that index.
 
9. `includes`

   - Parameter: a string to search for, optional start index which defaults to 0
   - Return: true if characters are found anywhere in string, else false
   - Example:
     ```js
     'Binny the Koala'.includes('Koala'); // true
     'Binny the Koala'.includes('Binny', 2); // false
     'Binny the Koala'.includes('binny'); // false
     ```
   - `includes` returns true/false depending whether a string is found anywhere within another string.

10. `indexOf`

   - Parameter: a string to search for, optional index to start from, defaults to 0
   - Return: the first index of the string, or -1 if not found
   - Example:
     ```js
     'hello'.indexOf('ell'); // 1
     'hello'.indexOf('xyz') // -1
     'hello'.indexOf('el',3) // -1
     ```
   - `indexOf` returns the first index of where the string was found.

11. `lastIndexOf`

   - Parameter: a string to search for, optional index to start from, defaults to 0
   - Return: the last index of the string, or -1 if not found
   - Example:
     ```js
     'hello'.lastIndexOf('l'); // 3
     'hello'.lastIndexOf('xyz') // -1
     'radar'.lastIndexOf('a',2) // 1
     ```
   - `lastIndexOf` returns the last index of where the string was found.

12. `padEnd`

   - Parameter: a length to denote total string length once padded, optional string value to pad with default ' '
   - Return: a new string of given total length padded to the right.
   - Example:
     ```js
     'hello'.padEnd(10); //  "hello     "
     'hello'.padEnd(10,'*'); // "hello*****"
     'hello'.padEnd(10, '1234567'); // "hello12345"
     ```
   - `padEnd` returns a new string of given total length padded to the right.

13. `padStart`

   - Parameter: a length to denote total string length once padded, optional string value to pad with default ' '
   - Return: a new string of given total length padded to the left.
   - Example:
     ```js
     'hello'.padStart(10); //  "     hello"
     'hello'.padStart(10,'*'); // "*****hello"
     'hello'.padStart(10, '1234567'); // "12345hello"
     ```
   - `padStart` returns a new string of given total length padded to the left.

14. `repeat`

   - Parameter: a number to indicate the number of times a string shoudl be repeated
   - Return: a new string with the values repeated given number of times
   - Example:
     ```js
     'hi '.repeat(3); // 'hi hi hi'
     ```
   - `repeat` returns a new string with the given string repeated a given number of times

15. `replace`

   - Parameter: a string value to search, a string value to replace with
   - Return: a new string with the match replaced by new value
   - Example:
     ```js
     'The moon is also a star'.replace('moon' , 'sun'); // "The sun is also a star"
     'The name of the wind'.replace('Th' , 'th'); // "the name of the wind"
     ```
   - `replace` returns a new string with the match replaced by new string.

16. `slice`

   - Parameter: a starting index, a final index - optional, default end of string
   - Return: a new string with extracted section of given string
   - Example:
     ```js
     'The big blue world'.slice(4); // 'big blue world'
     'The big blue world'.slice(4,12); // 'big blue'
     ```
   - `slice` returns a new string with extracted section. Original string remains unchanged.

17. `split`

   - Parameter: an optional seperator, an optional limit
   - Return: array of strings
   - Example:
     ```js
     'The big blue world'.split() // ["The big blue world"]
     'The big blue world'.split(' ') // ["The", "big", "blue", "world"]
     'The big blue world'.split(' ', 3) // ["The", "big", "blue"]
     ```
   - `split` returns an array of strings, split with the limiter value. If limiter is not given, entire string is taken as one element of array. Limit value restricts the count of elements in new array after it has been split.

18. `substring`

   - Parameter: number for start index, optional number for index end
   - Return: new string with specified part 
   - Example:
     ```js
     'The majestic lion'.substring(4) // majestic lion
     'The majestic lion'.substring(4,12) // 'majestic'
     'The majestic lion'.substring(4,45) // majestic lion
     ```
   - `substring` returns a new string within the specified start and end index.
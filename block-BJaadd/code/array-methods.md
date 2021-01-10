Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - Does not mutate original array

2. `join`

   - Parameter: optional seperator argument with which array is joined, default is comma
   - Return: a string with all elements of array seperated by given argument
   - Example:
     ```js
     let fruits = [ 'Apple' , 'Orange' , 'Banana' ];
     fruits.join(); // "Apple,Orange,Banana"
     fruits.join(' '); // "Apple Orange Banana"
     fruits.join('***'); // "Apple***Orange***Banana"
     fruits.join(7); // "Apple7Orange7Banana"
     ```
   - `join` accepts a seperator value which it uses to combine all the elements of an array into a single string.
   - Does not mutate original array

3. `flat`

   - Parameter: optional depth to indicate to how many levels array should be flattened. Default - 1
   - Return: a new array, with all elements in a single level
   - Example:
     ```js
     let arr1 = [1, 2, 3, [4, 5] ];
     arr1.flat(); // [1, 2, 3, 4, 5]
     let arr2 = [1, 2, [[4, 5], 6], 7, 8];
     arr2.flat(); // [1, 2, [4, 5], 6, 7, 8]
     arr2.flat(2) // [1, 2, 4, 5, 6, 7, 8]
     let arr3 = [ 1, 2, [[[3] , 4, [5,6]], 8], 9, [10,11]];
     arr3.flat(Infinity); // [1, 2, 3, 4, 5, 6, 8, 9, 10, 11]
     ```
   - `flat` accepts a depth value to indicate with which it will flatten the given array.
   - Does not mutate original array

4. `push`

   - Parameter: any number of values to add to array
   - Return: length of array added with given elements
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.push('Yellow'); // ["Pink", "Red", "Blue", "White", "Yellow"]
     colors.push(21, 34); // ["Pink", "Red", "Blue", "White", "Yellow", 21, 34]
     let moreColors = ['Indigo', 'Cyan'];
     colors.push(moreColors); //["Pink", "Red", "Blue", "White", "Yellow", 21, 34, ['Indigo', 'Cyan']]
     ```
   - `push` accepts n number of values to add to end of array and returns length of new array.
   - Mutates original array

5. `indexOf`

   - Parameter: element to find in array, optional fromIndex - default 0
   - Return: first index at which element is found, or -1 if element is not found
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White', 'Pink'];
     colors.indexOf('Pink'); // 0
     colors.indexOf('Pink',2); // 4
     colors.indexOf('Cyan'); // -1
     ```
   - `indexOf` accepts an element and returns the first index at which element is found
   - Does not mutate original array

6. `lastIndexOf`

   - Parameter: element to find in array, optional fromIndex - default arr.length - 1
   - Return: last index at which element is found, or -1 if element is not found
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White', 'Pink'];
     colors.lastIndexOf('Pink'); // 4
     colors.lastIndexOf('Pink',3); // 4
     colors.lastIndexOf('Cyan'); // -1
     ```
   - `lastIndexOf` accepts an element and returns the last index at which element is found. Search is backwards from given 'fromIndex'.
   - Does not mutate original array

7. `includes`

   - Parameter: element , optional fromIndex - default 0
   - Return: true/false
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White', 'Pink'];
     colors.includes('Pink'); // true
     colors.includes('Pink',2); // false
     colors.includes('Cyan'); // false
     ```
   - `includes` accepts an element and returns true/false based on whether the array includes the element.
   - Does not mutate original array

8. `reverse`

   - Parameter: none
   - Return: the array reversed
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.reverse(); // ["White", "Blue", "Red", "Pink"]
     let nums = [2, 56, 76, 9]; 
     nums.reverse(); // [9, 76, 56, 2]
     ```
   - `reverse` reverses the called array in place.
   - Mutates the original array.

9. `every`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: true, if callback functoin returns true for all elements of array. Else, false
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.every(color => color.length < 6); // true
     colors.every(color => color !== 'Red'); // false
     ```
   - `every` checks whether every element of the array passes the testing condition. If so every will return true, or else false.
   - Does not mutate original array

10. `shift`

   - Parameter: none
   - Return: the element which has been removed from the array
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.shift() // Pink
     colors.shift(); // Red
     console.log(colors); // ["Blue", "White"]
     ```
   - `shift` removes the first element of the array and returns that element.
   - Mutates the original array.

11. `splice`

   - Parameter: startIndex from which to remove elements, [deleteCount] specifies number of elements to delete, [itemsToInsert] specifies the items to replace the removed elements with.
   - Return: array containing deleted elements
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.splice(2) // ["Blue", "White"]
     console.log(colors);  // ["Pink", "Red"]
     colors.splice(1,1,'Yellow','Green'); // ["Red"]
     console.log(colors); // ["Pink", "Yellow", "Green"]
     ```
   - `splice` removes the specified elements from the array. These elements which were removed can be replaced by elements passed to splice method.
   - Mutates the original array.

12. `find`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: element, undefined if none of the elements resolve to true in callback function
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.find( color => color.includes('ink')); // 'Pink'
     colors.find( color => color.includes('green'));  // undefined
     ```
   - `find` accepts a callback function and returns the first element which passes the testing condition
   -  Does not mutate original array

13. `unshift`

   - Parameter: accepts n elements 
   - Return: new length of modified array
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.unshift('Cyan'); // 5
     console.log(colors); //  ["Cyan", "Pink", "Red", "Blue", "White"]
     colors.unshift('Yellow' ,'Indigo'); // 7
     console.log(colors); //  ["Yellow", "Indigo", "Cyan", "Pink", "Red", "Blue", "White"]
     ```
   - `unshift` accepts n elements which is added to the start of the array.
   -  Mutates the original array.

14. `findIndex`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: index of the first element which passes the testing condition, -1 if it fails
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.findIndex( color => color.includes('ink')); // 0
     colors.findIndex( color => color.includes('green'));  // -1
     ```
   - `findIndex` accepts a callback function and returns the index of the first element which passes the testing condition
   -  Does not mutate original array

15. `filter`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: new array of elements which give true in callback function, [] if none pass
   - Example:
     ```js
     let nums = [1, 3, 4, 6, 8, 9];
     nums.filter( num => num % 2 === 0); // [4, 6, 8]
     nums.filter( num => num > 10 ); //[]
     ```
   - `filter` accepts a callback function and returns a new array of the elements which passes the testing condition.
   -  Does not mutate original array

16. `flat`

   - Parameter: optional depth to indicate to how many levels array should be flattened. Default - 1
   - Return: a new array, with all elements in a single level
   - Example:
     ```js
     let arr1 = [1, 2, 3, [4, 5] ];
     arr1.flat(); // [1, 2, 3, 4, 5]
     let arr2 = [1, 2, [[4, 5], 6], 7, 8];
     arr2.flat(); // [1, 2, [4, 5], 6, 7, 8]
     arr2.flat(2) // [1, 2, 4, 5, 6, 7, 8]
     let arr3 = [ 1, 2, [[[3] , 4, [5,6]], 8], 9, [10,11]];
     arr3.flat(Infinity); // [1, 2, 3, 4, 5, 6, 8, 9, 10, 11]
     ```
   - `flat` accepts a depth value to indicate with which it will flatten the given array.
   - Does not mutate original array

17. `forEach`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: undefined - forEach does not return anything explicitly
   - Example:
     ```js
     let nums = [1, 3, 4, 6, 8, 9];
     let sum = 0 ;
     nums.forEach(num => sum += num );
     console.log(sum); // 31
     ```
   - `forEach` accepts a callback function, and it executes the function for each element of the array
   - Does not mutate original array

18. `map`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: new array
   - Example:
     ```js
     let nums = [1, 3, 4, 6, 8, 9];
     nums.map( num => num * 2); // [2, 6, 8, 12, 16, 18]
     ```
   - `map` accepts a callback function and returns a new array with the result of calling each element of the array.
   - Does not mutate original array

19. `pop`

   - Parameter: none
   - Return: element of array, undefined if array is empty
   - Example:
     ```js
     let nums = [1, 3, 4, 6, 8, 9];
     nums.pop(); // 9
     nums.pop(); // 8
     console.log(nums); // [1, 3, 4, 6]
     ```
   - `pop` removes the last element of the array and returns it
   - Mutates the original array.

20. `reduce`

   - Parameter: callback function, [initialValue]. callback function takes 4 args - accumulator, element, [index], [array]
   - Return: single value
   - Example:
     ```js
     let nums = [1, 3, 4, 6, 8, 9];
     nums.reduce((accumulator, num) => accumulator + num ,0); // 31
     ```
   - `reduce` executes a reducer function on each element of the array which reduces the entire array into a single value. 
   - Does not mutate original array

21. `slice`

   - Parameter: [startIndex] from which to select elements, [end] specifies the index before which to stop
   - Return: new array containing these elements
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.slice(2); // ["Blue", "White"]
     console.log(colors);  // ["Pink", "Red", "Blue", "White"]
     colors.slice(1,2); // ["Red"]
     ```
   - `slice` extracts the specified elements and returns them as a new array. Original array is not modified.
   - Does not mutate original array

22. `some`

   - Parameter: callback function. callback function takes 3 args - element, [index], [array]
   - Return: true, if callback function returns true for atleast one element of array. Else, false
   - Example:
     ```js
     let colors = ['Pink' , 'Red' , 'Blue' , 'White'];
     colors.every(color => color.length < 6); // true
     colors.every(color => color !== 'Red'); // true
     ```
   - `some` checks whether at least one of the element of the array passes the testing condition. If so some will return true, or else false.
   - Does not mutate original array
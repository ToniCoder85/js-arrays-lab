// console. log('HEY girl Hey')
// const myStuff = [2,'HEY girl Hey', true]
// console. log(myStuff)
// const movies = ['Barbie', 'Interstellar', 'Get Out'];

// const firstMovie = movies[0];
// firstMovie is 'Barbie'

// console.log(movies.length);
// `3` is logged to the console










// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

// for (let idx = 0; idx < movies.length; idx++) {
//     console.log(movies[idx]);
//   }
  


// const = movies ['Die Hard','Alien','Barbie,'Get Out']

//   for (let movie of movies) {
//     console.log(movie);
//   }
//   let myNum = 0
//   console. log(myNum)

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

// const foods = [];  

// console.log('Exercise 1 result:', foods);

/*

Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/


// const foods = ['pizza', 'cheeseburger'];
// console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// const foods = ['pizza', 'cheeseburger'];
// foods.unshift('taco');
// console.log('Exercise 3 result:', foods);
/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in the array.
2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
// const foods = ['pizza', 'cheeseburger'];
// const favFood = foods[0];

// console.log('Exercise 4 result:', 'favFood');
/*

Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

// const foods = ['pizza', 'cheeseburger'];

// foods.splice(1, 0, 'tofu');

// console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// const foods = ['pizza', 'cheeseburger'];

// foods.splice([0],1,'sushi', 'cupcake');
// console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
// const foods = ['sushi', 'cupcake', 'cheeseburger'];
// const yummy = foods.slice([2],3);

// console.log('Exercise 7 result:', yummy);
// console.log(foods);
// not clear if I was supposed to start with original "foods" or the above values. I put [2] as my start for change and end or parameter as 2 ...thought i had a rubberducky moment... stuck 

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
// const foods = [ 'pizza', 'tofu', 'cheeseburger' ];
// let soyIdx = ['tofu'];
// console. log(soyIdx.indexOf ('tofu'));
// console.log('Exercise 8 result:', soyIdx);
/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/



console.log('Exercise 9 result:', allFoods);

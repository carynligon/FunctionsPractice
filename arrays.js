// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function largest (arr) {
  var largerNum = 0;
  for (i=0; i<arr.length; i++) {
    if (arr[i] > largerNum) {
      largerNum = arr[i];
    }
  }
  return largerNum;
}

console.assert(largest(numbers) === numbers[8]);
console.assert(largest(numbers) === numbers[5], 'will fail, 7 is not the largest');



// ---------------------------
// 2. Find longest string
// ---------------------------

function largestString (arr) {
  var largerString = '';
  for (i=0; i<arr.length; i++) {
    if (arr[i].length > arr.length) {
      largerString = strings[i];
    }
  }
  return largerString;
}

console.assert(largestString(strings) === strings[3]);
console.assert(largestString(strings) === strings[1], 'will fail, is is not the largest string');


// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEvenNums (arr) {
  var evenNums = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    }
  }
  return evenNums;
}

console.assert(findEvenNums(numbers)[0] === 12);
console.assert(findEvenNums(numbers)[1] === 4);
console.assert(findEvenNums(numbers)[0] === 1, '1 is not an even number');


// ---------------------------
// 4. Find odd numbers
// ---------------------------

function findOddNums (arr) {
  var oddNums = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNums.push(arr[i]);
    }
  }
  return oddNums;
}

console.assert(findOddNums(numbers)[0] === 1);
console.assert(findOddNums(numbers)[1] === 9);
console.assert(findOddNums(numbers)[0] === 4, '4 is not an odd number');

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function findIs (arr) {
  var isArr = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i].indexOf('is') !== -1) {
      isArr.push(arr[i]);
    }
  }
  return isArr;
}

console.assert(findIs(strings)[0] === 'this');
console.assert(findIs(strings)[1] === 'is');
console.assert(findIs(strings)[2] === 'collection', 'false, collection does not contain is');


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
 function joinArrs (arr, arr2) {
   var bothArrs = arr.concat(arr2);
   return bothArrs;
 }

 console.assert(joinArrs(strings, numbers)[1] === 'is');
 console.assert(joinArrs(strings, numbers)[6] === 1);
 console.assert(joinArrs(strings, numbers)[3] === 'of', 'will fail, 3rd index is collection');



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

function sortInstructors (arr) {
  var jsInstructors = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i].teaches === 'JavaScript') {
      jsInstructors.push(arr[i].firstname.toLowerCase());
    }
  }
  jsInstructors.sort();
  return jsInstructors;
}

console.assert(sortInstructors(instructors)[1] === 'jake');
console.assert(sortInstructors(instructors)[0] === 'jd', 'will fail, calvin is in 0 index');

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
var largerNum = 0;

function largest () {
  for (i=0; i<numbers.length; i++) {
    if (numbers[i] > largerNum) {
      largerNum = numbers[i];
    }
  }
  return largerNum;
}



// ---------------------------
// 2. Find longest string
// ---------------------------
var largerString = '';

function largestString () {
  for (i=0; i<strings.length; i++) {
    if (strings[i].length > largerString.length) {
      largerString = strings[i];
    }
  }
  return largerString;
}



// ---------------------------
// 3. Find even numbers
// ---------------------------
var evenNums = [];

function findEvenNums () {
  for (i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNums.push(numbers[i]);
    }
  }
  return evenNums;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var oddNums = [];

function findOddNums () {
  for (i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNums.push(numbers[i]);
    }
  }
  return oddNums;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var isArr = [];

function findIs () {
  for (i=0; i<strings.length; i++) {
    if (strings[i].indexOf('is') !== -1) {
      isArr.push(strings[i]);
    }
  }
  return isArr;
}


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
 function joinArrs () {
   var bothArrs = strings.concat(numbers);
   return bothArrs;
 }


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
var jsInstructors = [];

function sortInstructors () {
  for (i=0; i<instructors.length; i++) {
    if (instructors[i].teaches === 'JavaScript') {
      jsInstructors.push(instructors[i].firstname.toLowerCase());
    }
  }
  jsInstructors.sort();
  return jsInstructors;
}

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if (num1 > num2) {
      return num1;
    }
    else {
      return num2;
    }
}

console.assert(max(1,3) === 3, '3 is greater than 1');
console.assert(max(50,5) === 50, '50 is greater than 5');
console.assert(max(6,4) === 4, '6 is greater, should fail');

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
      return num1;
    }
    else if (num2 > num1 && num2 > num3) {
      return num2;
    }
    else if (num3 > num1 && num3 > num2) {
      return num3;
    }
}

console.assert(maxOfThree(3,6,9) === 9, '9 is greater than 6 and 3');
console.assert(maxOfThree(3,27,9) === 9, 'should fail, 27 is largest');
console.assert(maxOfThree(19,11,3) === 19, '19 is largest');

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return 'true';
    }
    else {
      return 'false';
    }
}

console.assert(isVowel('a') === 'true', 'a should be a vowel');
console.assert(isVowel('f') === 'false', 'f should not be a vowel');
console.assert(isVowel('g') === 'true', 'g is not a vowel, should fail');

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var newPhrase = [];

function rovarspraket(phrase){
  newArr = phrase.split('');
  for (i=0; i < newArr.length; i++) {
    if (newArr[i] !== 'a' || newArr[i] !== 'e' || newArr[i] !== 'i' || newArr[i] !== 'o' || newArr[i] !== 'u' || newArr[i] !== '') {
      console.log('hi');
      newPhrase += newArr[i] + 'o' + newArr[i];
    }
  }
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var newPhrase = '';
  for (i= phrase.length-1; i >= 0; i--) {
    newPhrase += phrase[i];
  }
  return newPhrase;
}

console.assert(reverse('cat') === 'tac', 'tac is cat backwards');
console.assert(reverse('doctor') === 'rotcod', 'doctor backwards');
console.assert(reverse('hey there') === 'ereht ih', 'should fail, should be ereht yeh');

// REVERSE WORDS

function reverseWords(sentence) {
  return sentence.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords('alchemy rocks gold'));

// TITLE CASE WORDS

function titleCase(sentence) {
  const splitSentence = sentence.split(' ');
  const mappedSentence = splitSentence.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return mappedSentence.join(' ');
}
console.log(titleCase('alchemy ROCKS goLD'));

// ODDISH OR EVENISH

function oddishOrEvenish(number) {
  const stringArray = number.toString().split('');
  const numArray = stringArray.map(Number);
  const sum = numArray.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
  // same as return sum %2 ? 'Oddish' : 'Evenish' bc without the ===0 it is falsey (0 is falsey)
}

console.log(oddishOrEvenish(121));

// AT

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
    // same as return arr[arr.length -- index]
  }

  // same as return index > -1 ? arr[index] : arr[arr.length + index]
}
// `['a', 'b', 'c', 'd', 'e']`, `1` should get 'b'
// `['a', 'b', 'c', 'd', 'e']`, `-2` should get 'd'

// FIZZ BUZZ
function fizzBuzz(number) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(16));

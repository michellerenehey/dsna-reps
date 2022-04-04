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
// same as let result = '; if (i%3===0) result += 'Fizz'; if (i%5===0) result += 'Buzz'; list.push(result || i); return list

console.log(fizzBuzz(16));

// ANNAGRAMS

function anagrams(wordOne, wordTwo) {
  const arr1 = wordOne.split('').sort().join('');
  const arr2 = wordTwo.split('').sort().join('');
  return arr1 === arr2 ? true : false;
}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));

// // UNIQUE STRINGS

// function uniqueStrings(strings) {
//   // array of arrays of letters, sorted
//   const orderedUniqueLetters = strings.map((s) => [...new Set(s).sort()]);
//   const duplicates = [...new Set(...orderedUniqueLetters)];
// }

// console.log(
//   uniqueStrings(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])
// );
// console.log(uniqueStrings(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));

// UNIQUE CHAR from class lecture
function uniqueChar(string) {
  const chars = string.split('').sort();
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const prev = chars[i - 1];
    const next = chars[i + 1];
    if (current !== prev && current !== next) return current;
  }
  return '_';
}

console.log(uniqueChar('abdacabad'));

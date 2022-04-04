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

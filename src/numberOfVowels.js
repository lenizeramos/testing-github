const numberOfVowels = function (data) {
  const vowels = ["a", "e", "i", "o", "u"];
  return data
    .split("")
    .reduce((prev, curr) => (vowels.includes(curr) ? prev + 1 : prev), 0);
};

console.log(numberOfVowels("hello"));
console.log(numberOfVowels(1,"a", 3, "b"))
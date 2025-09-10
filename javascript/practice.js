const string = "The revolution will not be televised."
// You can use single,double or backtick to encapsule a string
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//Embedding in javascricpt using the backtick
let name = "Chris";
let greeting = `Hello, ${name}`;
console.log(greeting);

//expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

//multi line strings
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

const newline2 = "One day you finally knew \n what you had to do, and began,";
console.log(newline2);

/*
One day you finally knew
what you had to do, and began,
*/

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);


// string concatenation
let word1 = "hello";
let word2 = "world";
let word3 =  word1.concat(" ", word2);
console.log(word3);

//EXTRACTING STRING PARTS
//String slice
let group = "Apple, Banana, Kiwi";
let part = group.slice(7,13);
console.log(part);

//String Substring
let str = "watermelon, Pizza, Money";
let prt = str.substring(7,13);
console.log(prt);

//Well forme dstring
let phrase = "HELLO WORLD";
let logic = phrase.isWellFormed();
console.log(logic);


//some extra stuff
/*function sanitizeText(str) {
  return str
    // remove unmatched high surrogates
    .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g, "")
    // remove unmatched low surrogates
    .replace(/(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, "");
}

// Use it only where needed
chatBox.oninput = (e) => {
  e.target.value = sanitizeText(e.target.value);
};

api.sendMessage(sanitizeText(userMessage));
 */

//For example in input fields
/* chatInput.addEventListener("input", e => {
  e.target.value = sanitizeText(e.target.value);
});
*/

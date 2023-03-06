/**
 * Javascript String Mathod list
 * 01. charAt()
 * 02. charCodeAt()
 * 03. concat()
 * 04. endsWith()
 * 05. includes()
 * 06. indexOf()
 * 07. lastIndexOf()
 * 08. match()
 * 09. matchAll()
 * 10. repeat()
 * 11. replace()
 * 12. replaceAll()
 * 13. search()
 * 14. slice()
 * 15. split()
 * 16. startsWith()
 * 17. substr()
 * 18. substring()
 * 19. toLowerCase()
 * 20. toUpperCase()
 * 21. toString()
 * 22. trim()
 * 23. trimStart()
 * 24. trimEnd()
 * 25. valueOf()
 * 26. localeCompare()
 * 27. normalize()
 * 28. padEnd()
 * 29. padStart()
 * ========= for using html ============
 * 30. sup() : return sup html element
 * 31. strike() : return strike html element
 * 32. link("url") : return a html element with url
 * 33. italics() : return strike html element
 * 34. fontsize() : return font html element with font size
 * 35. fontcolor() : return font html element with font color
 * 36. fixed() : return tt html element
 * 37. bold() : return b html element
 * 38. blink() : return blink html element
 * 39. big() : return big html element
 * 40. anchor("name") : return a html element with name
 * 
 **/

//===============================================
const chatAtLearn = () => {
  //charAt() method -- charAt mathod accepte index number of string, than return index of string value
  var str = "hello i'm rejaul";
  const chatatt01 = str.charAt(); //defult 0 number index
  const chatatt02 = str.charAt(1);

  // index out of range, return empty string
  const outofReange = str.charAt(50);

  // alternative way
  const chatatt03 = str[2];

  //creating a simple project============
  const newStrArray = [];
  let newString = "";
  for (let i = str.length; i >= 0; --i) {
    newStrArray.push(str.charAt(i));
    newString += str.charAt(i);
    // Using alternative way
    // newStrArray.push(str[i])
  }

  const newString1 = newStrArray.join("");

  // Output
  console.log(newString1);
};
//chatAtLearn();
//==============================================

//==============================================

const charCodeAtLearn = () => {
  //charCodeAt(index:Number) mathod revive a index argiment and return unicode of value,  it's cashSencetive

  const str = "HeLlo";

  const chartCodeAtValue = str.charCodeAt(); //defual 0 index return first cracture

  const chartCodeAtValue2 = str.charCodeAt(1); //return 1 number index cracture

  const outOfReange = str.charCodeAt(30); // return NaN

  //result
  console.log(outOfReange);
};
//charCodeAtLearn();
//==============================================

//==============================================
//concat() for using concatenation,
const concatLearn = () => {
  const str1 = "Hello";
  const str2 = "World";

  const concat1 = str1.concat(str2);

  // receive many paramitars
  const concat2 = str1.concat(" ", str2);

  // concate mathod useing tow oparator // +, +=
  // alternative Using
  const concat3 = str1 + str2;
  const concat4 = str1 + " " + str2;

  //result
  console.log(concat4);
};
//concatLearn();

//==============================================

//==============================================
const endsWithLearn = () => {
  //endsWith( sringvalue, reange:indexNumber(optional)) return true ar false

  const str = "what is your name?";

  // using first paramitars
  const endWith1 = str.endsWith("?");
  const endWith2 = str.endsWith("e");

  // using first and second paramiters
  const endWith3 = str.endsWith("t", 4);
  const endWith4 = str.endsWith("t", 5);

  //result
  console.log(endWith4);
};
//endsWithLearn();
//==============================================

//==============================================
const includesLearn = () => {
  // includes(string, index(optional)) return true and false
  const str = "reja kamal jamal ramjan ";

  // using with first paramiter
  const includes1 = str.includes("reja");
  const includes2 = str.includes("Rahim");

  // using with first and second  paramiters
  //The includes also accept an optional second argument which determines the position from where the method starts searching within the string,  defual is 0

  const includes3 = str.includes("reja", 10);
  const includes4 = str.includes("reja", 0);

  //result
  console.log(includes4);
};
// includesLearn();
//==============================================

//==============================================
const indexOfLearn = () => {
  //indexOf(string, index:optional) method accept string paramiters if string is found return first index,  of notFound return -1
  // the method searching in start point
  const str = "my name is rejaul karim";

  //using only first paramiter
  const indexOf1 = str.indexOf("reja"); // return index 11
  const indexOf2 = str.indexOf("kamal"); // return -1

  // using first and second paramiters
  // second paramiter shoud be index, how index start for searching defin
  const indexOf3 = str.indexOf("is", 10); // return -1
  const indexOf4 = str.indexOf("is", 5); // return -1

  //result
  console.log(indexOf4);
};

//indexOfLearn();
//==============================================

//==============================================
const lastIndexOfLearn = () => {
  //lastIndexOf(string) method accept string paramiters if string is found return last index,  of notFound return -1
  // the method searching in end point

  const str = "to do or not to do";

  // using first paramiters
  const lastIndexOf1 = str.lastIndexOf("to"); // return index 13
  const lastIndexOf2 = str.lastIndexOf("kamal"); // return -1

  // using first and second paramiters
  // second paramiter shoud be index, how index start for searching defin

  const lastIndexOf3 = str.lastIndexOf("to", 16);
  const lastIndexOf4 = str.lastIndexOf("to", 0);

  //result
  console.log(lastIndexOf3);
};
//lastIndexOfLearn();
//==============================================

//==============================================

const matchLearn = () => {
  //match() mathod accept paramiter of regular expression
  // match mathod return null or array of string
  // isFound return array ofString,  or isNotFound return null

  const str = "to do or not to do";

  const match1 = str.match(/to/gi);
  const match2 = str.match(/is/gi);

  //rejult
  console.log(match1);
};

//matchLearn();

//==============================================

//==============================================

const matchAllLearn = () => {
  //matchAll() method accept regular expression, and try to matching all of string and if isfound return array of string,  or not foumd return null

  const str = "to do or not to do";

  const matchAll1 = [...str.matchAll(/d/g)];

  // result
  console.log(matchAll1);
};
//matchAllLearn();

//==============================================

//==============================================

const repeatLearn = () => {
  //repeat() this mathod using for repeating string

  const str = "Tick tock, ";

  // repeat the string by 2 times
  console.log(str.repeat(2));
  // converts the decimal value to integer
  console.log(str.repeat(3.5));
  // repeat 0 times
  console.log(str.repeat(0));
};
//repeatLearn();

//==============================================

//==============================================
const replaceLearn = () => {
  // The replace method selects one or all matches from a string and replace it with a replacement string and return it as new string. To find the match method use string or regular expression. When a string is passed as an argument then it select only the first match while when a regular expression is passed then it selects all the matches.

  const str = "Carbon emission is increasing day by day.";

  // using string to match
  const replace1 = str.replace("day", "year");
  // using regular expression to match
  const replace2 = str.replace(/day/g, "year");

  // enather usecash
  // using string to match
  //str.replace("day", foundMatch);
  // using regular expression to match
  str.replace(/day/g, foundMatch);

  function foundMatch(match, index, string) {
    console.log(`match = ${match}, index = ${index}, string = ${string}`);
  }

  //result
  //console.log(replace2);
};
//replaceLearn();
//==============================================

//==============================================
const replaceAllLearn = () => {
  const str = "Carbon emission is increasing day by day.";

  // select all match using both string or regular expression
  console.log(str.replaceAll("day", "year"));
  console.log(str.replaceAll(/day/g, "month"));
};
//replaceAllLearn();

//==============================================

//==============================================
const searchLearn = () => {
  const str = "kJhBfdbAjdbj";

  // simple usecash
  // if found return index or not found -1
  console.log(str.search("z"));

  //using with regular expression
  console.log(str.search(/j/gi));
};
//searchLearn();
//==============================================

//==============================================

const sliceLearn = () => {
  //slice(startIndex, endIndex) mathod using for string sliceing
  //receive tow paramiter first param start index, second param is end index

  const str = "my name is rejaul karim";

  const name = str.slice(11, str.length);

  //The slice() method also accepts negative value, where -1 represents the last index
  const name1 = str.slice(-12, -1);

  console.log(name1);
};

//sliceLearn();
//==============================================

//==============================================
const splitLearn = () => {
  // solit() mathod return new splited array
  const sentence = "Carbon emission is increasing day by day";

  // no pattern -> return whole string in array
  console.log(sentence.split());
  // split at each space
  console.log(sentence.split(""));
  // split at each space
  console.log(sentence.split(" "));
  // split at each 'is'
  console.log(sentence.split("is"));
};
//splitLearn();
//==============================================

//==============================================
const startsWithLearn = () => {
  // startsWith(string,start index) mathod return true ar false, data isfound retun true notfound return false

  const sentence = "Carbon emission is increasing day by day";
  console.log(sentence.startsWith("Car"));
  console.log(sentence.startsWith("carbon")); // return false case-sensitive
  console.log(sentence.startsWith("bon", 3));
};
//startsWithLearn();
//==============================================

//==============================================
const substrLearn = () => {
  // substr(start index, end index ) mathod return spited steing,

  const sentence = "Carbon emission is increasing day by day";

  // start at index 10, cut 6 characters
  console.log(sentence.substr(10, 6));
  // start at index 10, cut all characters
  console.log(sentence.substr(10));

  // negative index
  console.log(sentence.substr(-4, 3));
};

//substrLearn();
//==============================================

//==============================================
const substringLearn = () => {
  const sentence = "Carbon emission is increasing day by day";

  // extracting string
  // start at index 10, cut all characters
  console.log(sentence.substring(10));
  // start at index 10, and end at index 20
  console.log(sentence.substring(10, 20));

  // startIndex > endIndex
  console.log(sentence.substring(20, 10));
};
//substringLearn()

//==============================================

//==============================================
const toLowerCaseLearn = () => {
  const str = "My Name Is Rejaul Karim";

  const newString = str.toLowerCase();

  console.log(newString);
};
//toLowerCaseLearn()
//==============================================

//==============================================
const toUpperCaseLearn = () => {
  const str = "My Name Is Rejaul Karim";

  const newString = str.toUpperCase();

  console.log(newString);
};
//toUpperCaseLearn()
//==============================================

//==============================================
const toStringLearn = () => {
  const str = 4775586969797070707070;

  const newString = str.toString();

  console.log(newString);
};
//toStringLearn();
//==============================================

//==============================================
const trimLearn = () => {
  const str = "my name is rejaul     ";

  const newString = str.trim();

  console.log(newString);
};
//trimLearn();
//==============================================

//==============================================
const valueOfLearn = () => {
  const str = new String("my name is rejaul");

  const newString = str.valueOf();

  console.log(newString);
  console.log(str);
};
// valueOfLearn();
//==============================================

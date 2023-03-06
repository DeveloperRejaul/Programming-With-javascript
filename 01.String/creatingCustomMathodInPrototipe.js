//===============================================
const customCharAt = () => {
  // bulding custom CharAt mathod
  String.prototype.customCharAt = function (index) {
    return this[index];
  };

  const str = "Hello";
  const newStr = str.customCharAt(2);
  console.log(newStr);
};
//customCharAt();
//===============================================

//===============================================
const customCharCodeAt = () => {
  //upercash  65 to 90, AZ
  // loarcash 97 to 122, AZ
  const obj = {
    //upercash
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    //loarcash
    97: "a",
    98: "b",
    99: "c",
    100: "d",
    102: "e",
    103: "f",
    104: "g",
    105: "h",
    106: "i",
    107: "j",
    108: "k",
    109: "l",
    110: "m",
    111: "n",
    112: "o",
    113: "p",
    114: "q",
    115: "r",
    116: "s",
    117: "t",
    118: "u",
    119: "v",
    120: "w",
    121: "x",
    122: "y",
    123: "z",
  };

  String.prototype.customCharCodeAt = function (cractor) {
    for (const property in obj) {
      if (obj[property] === cractor) {
        return Number(property);
      }
    }
  };
  const str = "ABC";
  const unicode = str.customCharCodeAt("Z");

  //result
  console.log(unicode);
};
//customCharCodeAt();
//==============================================

//==============================================
const customConcat = () => {
  String.prototype.customConcat = function (...params) {
    return this + params.join("");
  };

  const str = "hello";

  const newStr = str.customConcat(" " + "world", "my", "name");

  //Rejult
  console.log(newStr);
};
//customConcat();
//==============================================

//==============================================
const customEndsWith = () => {
  String.prototype.customEndsWith = function (param) {
    return this.includes(param, this.length - param.length);
  };

  const str = "hello?";
  const newStr = str.customEndsWith("llo?");

  //Rejult
  console.log(newStr);
};
//customEndsWith();
//==============================================

//==============================================
const customStartsWith = () => {
  String.prototype.customStartsWith = function (param) {
    const newThis = this.slice(0, param.length);
    return newThis === param ? true : false;
  };

  const str = "hello?";
  const newStr = str.customStartsWith("hello");

  //Rejult
  console.log(newStr);
};
//customStartsWith();
//==============================================

//==============================================
const customIncludes = () => {
  String.prototype.customIncludes = function (searchValue, startIndex = 0) {
    if (startIndex < 0 || startIndex >= str.length) {
      // Invalid index, return false
      return false;
    }

    for (let i = startIndex; i < this.length; i++) {
      const newStr = this.slice(i, i + searchValue.length);
      if (newStr === searchValue) {
        return true;
      }
    }
    return false;
  };

  const str = "hello";
  const newStr = str.customIncludes("el", 1);

  //Rejult
  console.log(newStr);
};
//customIncludes();
//==============================================

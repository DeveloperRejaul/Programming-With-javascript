var inputValue = "153882h7272";

var patten = /[^+0-9]/gi;
var validateValue = inputValue.match(patten);

function chack(v) {
  console.log(v);

  if (v !== /[\D]/) {
    return false;
  }
  return true;
}

var result = chack(validateValue);
//Logonsole.log(result);

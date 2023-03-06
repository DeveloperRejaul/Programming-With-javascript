// All functionality
class Crud {
  constructor() {
    this.str = str;
  }

  // Read String
  read() {
    console.log(this.str);
    return this.str;
  }

  // Creating String
  create(...string) {
    return this.str.concat(string);
  }

  createSpacific(string, startIndex) {
    const firstStr = this.str.slice(0, startIndex);
    const lastStr = this.str.slice(startIndex);
    const concatStr = firstStr.concat(string).concat(lastStr);
    return concatStr;
  }

  // Update String
  update(searchValue, replaceValue) {
    return this.str.replace(searchValue, replaceValue);
  }

  // Delete String
  delete(str) {
    return this.str.split(str).join("");
  }
  deleteAll() {
    return this.str.split(this.str).join("");
  }

  // find String
  find(str, index = 0) {
    return this.str.includes(str, index);
  }
  find2(str, index = 0) {
    return this.str.indexOf(str, index);
  }
  find3(str, index = 0) {
    return this.str.lastIndexOf(str, index);
  }
  find4(str, index = 0) {
    return this.str.search(str, index);
  }
}
// ========================================

const str = "my name is rejaul karim";
const crud = new Crud(str);
const readData = crud.read();
const createSpacificIndex = crud.createSpacific("hello", 2);
const createStr = crud.create(", Ramjan Ali");
const updateStr = crud.update("rejaul", "Ramjan");
const deleteStr = crud.delete();
const deleteStrAll = crud.deleteAll();
const find = crud.find("my");
const find2 = crud.find2("re");
const find3 = crud.find3("re");
const find4 = crud.find4("re");

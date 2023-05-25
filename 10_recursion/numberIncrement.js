const incrementNumber = (num, callCount) => {
  if (num <= callCount) {
    // console.log(num);
    incrementNumber(++num, callCount);
  }
};
// incrementNumber(1, 100);

var totalNumber = 0;
const incrementNumber1 = (num, callCount) => {
  if (num <= callCount) {
    totalNumber += num;
    incrementNumber1(++num, callCount);
  }
};
incrementNumber1(1, 100);
console.log(totalNumber);

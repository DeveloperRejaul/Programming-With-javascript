/**
 * What is closer:: closer is a way of data storing
 * why closer :: scoping er problem take solve kurar junno closer projoin huy.
 * kukun mone kurbo ekta function e closer hyce :: ekta function jukon arekta function ke return kurbe and return kura function e tar parent function er kono variable niye kaz kura huy Otoba prent function er kono value ke mune rakar moto kono kaz kura huy, tukonuy moloto closer gute
 *
 * !mone raka projon judi parent function er kono variable ke return kura function e bebohar kura na huy, tokon closer huy na. karon ekane closer er dorkar huy na
 * !closer moloto tar prent er variable ke mone rakar junno huye take.
 *
 */
// Example with closer
const tem = () => {
  let count = 0;
  return () => {
    return (count += 1);
  };
};

const add = tem();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.dir(add);

// Example with out closer
const tem1 = () => {
  let count = 0;
  return () => {
    console.log("hello world");
  };
};

const add1 = tem1();
console.log(add1());
console.dir(add1);

//TODO // soja kuta closer tokony huy jukon prent function er value chaild function bebohar kure , and prent function child function ke return kure

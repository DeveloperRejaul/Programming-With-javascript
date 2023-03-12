/**
 * @Title : Reduce Array into single Object
 */

let prodects = [
  {name: 'javascript cookbook', price: 350},
  {name: 'Heand Frist python', price: 200},
  {name: 'Heand Frist java', price: 400},
  {name: 'javascript cookbook', price: 350},
  {name: 'Heand Frist java', price: 400},
  {name: 'javascript cookbook', price: 350},
];

const inVoice = prodects.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

console.log(inVoice);

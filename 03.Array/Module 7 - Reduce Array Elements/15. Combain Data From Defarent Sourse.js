/**
 * @Title : Combain Data From Different Sourse
 *
 */

const couses = [
  {
    id: 'OC1',
    name: ' JavaScript All You Need to Know ',
    topic: 'JavaScript',
    price: 2599,
  },
  {
    id: 'OC2',
    name: ' Dive Into Node js ',
    topic: 'node js',
    price: 2599,
  },
  {
    id: 'OC3',
    name: ' Understand React Js Core Featurse',
    topic: 'JavaScript',
    price: 1799,
  },
];

const discountedPrice = {
  OC1: 2099,
  OC2: 2099,
  OC3: 1399,
};

const updateCourses = couses.reduce((acc, cur) => {
  if (discountedPrice[cur.id]) {
    cur.discountedPrice = discountedPrice[cur.id];
  } else {
    cur.discountedPrice = 0;
  }

  acc.push(cur);

  return acc;
}, []);

console.log(updateCourses);

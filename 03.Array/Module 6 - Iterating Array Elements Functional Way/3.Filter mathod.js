/**
 * @Title : Filter Mathod
 * Filter er kaz ki ?
 *  1. Filter hulo arrayr porotekta elemant ke  itarate kurbe ( kono ekta condition er vittite ) .
 *  2. noton ekta array return kurbe
 *
 *  Example: const logGpa = studentArray.filter(value => value.gpa >= 3);
 *
 *
 * Map vs Filter // Map kuku babohar hube? Filter Kukun bebohar hube
 *
 * Map: jukon kono arryr protekta elemant ke itarate kure kono kiso add kurte hube / array er value ke edite kurte hube // sesob kettere bebohar kurbo
 * Filter : jukon kono array er modde protekta elemant ke itarate kure , kono nirdisto condition er vittite noton ar akta arry niye aste huy // sesob kettere bebohar kurbo
 *
 * node : judi Filter muto kure Map diye Conditional return kurte cay // se kettere map sodo bolian data return kure
 *
 */
const studentArray = [
  {
    id: 1,
    name: 'rejaul',
    gpa: 2.99,
    email: 'mail@gmail.com',
    due: false,
    dueamunt: 0,
  },
  {
    id: 2,
    name: 'Kamal',
    gpa: 3.99,
    email: 'mail@gmail.com',
    due: true,
    dueamunt: 1000,
  },
  {
    id: 3,
    name: 'jamal',
    gpa: 3.99,
    email: 'mail@gmail.com',
    due: false,
    dueamunt: 0,
  },
  {
    id: 4,
    name: 'rahim',
    gpa: 4.99,
    email: 'mail@gmail.com',
    due: true,
    dueamunt: 1200,
  },
  {
    id: 5,
    name: 'Shahin',
    gpa: 1.99,
    email: 'mail@gmail.com',
    due: false,
    dueamunt: 0,
  },
];

// Using Filter
const logGpa = studentArray.filter(value => value.gpa >= 3);
// console.log(logGpa);

//add send them inspiring amassage to stady more or try header [task]
const dueStudent = studentArray.filter(value => value.due === true);
// console.log(dueStudent);

const dueAmount = studentArray.filter(value => value.dueamunt > 1000);
// console.log(dueAmount);

/**
 * @Title :Using Filter with Map
 */
const emailTempletObj = studentArray
  .filter(value => value.gpa <= 3)
  .map(value => {
    return {
      ...value,
      title: 'Result Is Published',
      msg: 'You Have Failed',
    };
  });

// console.log(emailTempletObj);

// Filter mathid implemantation
function myFilter(arr, cl) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const data = cl(arr[i], i, arr);

    if (data) {
      result.push(arr[i]);
    }
  }
  return result;
}

//
const filteredArray = myFilter([1, 2, 3], value => value >= 3);

console.log(filteredArray);

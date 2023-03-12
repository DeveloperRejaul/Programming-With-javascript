/**
 * @Title : Group Contact List
 */

const contact = [
  {name: 'cedres', phone: '01587735471', email: 'cdris@gmail.com'},
  {name: 'bedres', phone: '01587735541', email: 'cddfis@gmail.com'},
  {name: 'fedres', phone: '01587735541', email: 'cddfis@gmail.com'},
  {name: 'cesfdes', phone: '01587735471', email: 'cdris@gmail.com'},
  {name: 'besdfres', phone: '01587735541', email: 'cddfis@gmail.com'},
  {name: 'fedsres', phone: '01587735541', email: 'cddfis@gmail.com'},
];

contact.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

const group = contact.reduce((acc, cur) => {
  let groupName = cur.name.charAt(0).toLocaleUpperCase();
  if (acc[groupName]) {
    acc[groupName].push(cur);
  } else {
    acc[groupName] = [cur];
  }

  return acc;
}, {});

console.log(group);

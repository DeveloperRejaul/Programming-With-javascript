/**
 * @Title : Generating Markup Form List
 */

const Links = [
  {name: 'facebook', url: 'http://facebook.com'},
  {name: 'Youtube', url: 'http://facebook.com'},
  {name: 'Instagrame', url: 'http://facebook.com'},
  {name: 'Linkdin', url: 'http://facebook.com'},
  {name: 'Twitter', url: 'http://facebook.com'},
];

let template = `<ul>{{links}}</ul>`;

const linksList = Links.reduce((acc, cur) => {
  acc += `<li> <a href='${cur.url}'> ${cur.name}</a> </li>`;
  return acc;
}, '');

template = template.replace(`{{links}}`, linksList);

console.log(template);

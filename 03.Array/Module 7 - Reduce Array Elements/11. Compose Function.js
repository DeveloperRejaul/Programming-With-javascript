/**
 * @Title : Compose Function
 */
// Understend Compose
const n = 5;
const add10 = n => n + 10;
const time3 = n => n * 3;
const div2 = n => n / 2;

const x = div2(time3(add10(n)));

// Pip function - shorted way
const pip =
  (...fns) =>
  x =>
    fns.reduce((v, f) => f(v), n);
const r1 = pip(add10, time3, div2)(5);

// Compose Functon Long Way
const compose = (...fns) => {
  return x => {
    return fns.reduce((v, f) => f(v), x);
  };
};
const r2 = compose(add10, time3, div2)(n);

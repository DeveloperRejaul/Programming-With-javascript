/**
 * @Title : imaplemant One Readuce
 */

function mayReduce(arr, cb, init) {
  let acc = init,
    start = 0;

  if (!init) {
    acc = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], arr);
  }
  return acc;
}

const arr = [1, 2, 3, 4, 5];

//  test 01
const sum = mayReduce(
  arr,
  (acc, cur) => {
    return acc + cur;
  },
  10,
);

//  test 02
const votes = [
  'java',
  'java',
  'python',
  'java',
  'javascript',
  'python',
  'javascript',
];

const result = mayReduce(
  votes,
  (acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  },
  {},
);

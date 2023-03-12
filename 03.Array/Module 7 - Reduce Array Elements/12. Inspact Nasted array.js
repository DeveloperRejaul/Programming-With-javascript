/**
 *
 * @Title : Inspact Nasted Array
 */

const js = {
  name: 'javascript All You need to know',
  author: {
    name: 'HM Nayem',
    email: '123@gmail.com',
  },
  content: {
    video: {
      count: 222,
    },
  },
};

const node = {
  name: 'Div into Node js',
  author: {
    name: 'HM Nayem',
    email: '123@gmail.com',
  },
  content: {
    video: {
      count: 234,
    },
  },
};

const react = {
  name: 'Anderstend React core furcer',
  author: {
    name: 'HM Nayem',
    email: '123@gmail.com',
  },
  content: {
    video: {
      count: 125,
    },
    artical: {
      count: 15,
    },
    quiz: {
      count: 10,
    },
  },
};
const courses = [js, node, react];

const inspactObj = (obj, path) => {
  return path.split('.').reduce((acc, field) => {
    if (acc) {
      return acc[field];
    }
    return 0;
  }, obj);
};
courses.forEach(courses => {
  const countVideo = inspactObj(courses, 'content.vide.count');
  const countArticale = inspactObj(courses, 'content.artical.count');
  const countQuiz = inspactObj(courses, 'content.quiz.count');

  console.log(
    `Total Videos:${countVideo}, Total Articale:${countArticale}, Total:${countQuiz} `,
  );
});

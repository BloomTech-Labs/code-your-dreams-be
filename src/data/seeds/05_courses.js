const courses = [
  {
    name: "Python",
    description: "The Python course is an all-in-one course for learning the Python programming language. Whether you're a beginner or experienced developer, this course covers everything you need to know to become proficient in Python."
  },
  {
    name: "App Inventor",
    description: "The App Inventor course teaches students how to plan and develop a web application from start to finish. Through hands-on projects, you'll learn the basics of web development and create interactive and dynamic web apps."
  }
];

exports.seed = function (knex) {
  return knex('courses')
    .del()
    .then(function () {
      return knex('courses').insert(courses);
    });
};

exports.courses = { courses };
const course_permissions = [
  {
    chapter_id: 1,
    course_id: 1,
    access_granted: true
  },
  {
    chapter_id: 1,
    course_id: 2,
    access_granted: true
  },
  {
    chapter_id: 2,
    course_id: 1,
    access_granted: true
  },
  {
    chapter_id: 2,
    course_id: 2,
    access_granted: false
  },
  {
    chapter_id: 3,
    course_id: 1,
    access_granted: false
  },
  {
    chapter_id: 3,
    course_id: 2,
    access_granted: true
  },
  {
    chapter_id: 4,
    course_id: 1,
    access_granted: false
  },
  {
    chapter_id: 4,
    course_id: 2,
    access_granted: false
  },
  {
    chapter_id: 5,
    course_id: 1,
    access_granted: true
  },
  {
    chapter_id: 5,
    course_id: 2,
    access_granted: true
  },
];

exports.seed = function (knex) {
  return knex('course_permissions')
    .del()
    .then(function () {
      return knex('course_permissions').insert(course_permissions);
    });
};

exports.course_permissions = { course_permissions };

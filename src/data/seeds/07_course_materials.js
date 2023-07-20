const course_materials = [
  // Python course materials
  {
    name: "Introduction to Python",
    course_id: 1,
    material_type_id: 1,
    description: "A beginner's guide to Python programming.",
    material_link: "www.codeyourdreams.com/Introduction_to_Python"
  },
  {
    name: "Python Basics",
    course_id: 1,
    material_type_id: 2,
    description: "An overview of the fundamental concepts of Python.",
    material_link: "www.codeyourdreams.com/Python_Basics"
  },
  {
    name: "Python Crash Course",
    course_id: 1,
    material_type_id: 3,
    description: "A fast-paced video tutorial to get you started with Python.",
    material_link: "www.codeyourdreams.com/Python_Crash_Course"
  },
  {
    name: "Python Quiz",
    course_id: 1,
    material_type_id: 4,
    description: "Test your knowledge with this Python quiz.",
    material_link: "www.codeyourdreams.com/Python_Quiz"
  },

  // App Inventor course materials
  {
    name: "Introduction to App Inventor",
    course_id: 2,
    material_type_id: 1,
    description: "A beginner's guide to App Inventor app development.",
    material_link: "www.codeyourdreams.com/Introduction_to_App_Inventor"
  },
  {
    name: "App Inventor Basics",
    course_id: 2,
    material_type_id: 2,
    description: "An overview of the fundamental concepts of App Inventor.",
    material_link: "www.codeyourdreams.com/App_Inventor_Basics"
  },
  {
    name: "App Inventor Tutorial",
    course_id: 2,
    material_type_id: 3,
    description: "Follow along with this video tutorial to create your first app.",
    material_link: "www.codeyourdreams.com/App_Inventor_Tutorial"
  },
  {
    name: "App Inventor Quiz",
    course_id: 2,
    material_type_id: 4,
    description: "Test your knowledge with this App Inventor quiz.",
    material_link: "www.codeyourdreams.com/App_Inventor_Quiz"
  }
];

exports.seed = function (knex) {
  return knex('course_materials')
    .del()
    .then(function () {
      return knex('course_materials').insert(course_materials);
    });
};

exports.course_materials = { course_materials };
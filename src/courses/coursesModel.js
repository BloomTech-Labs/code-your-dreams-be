const db = require('../data/db-config');

// CREATE NEW COURSE
const createCourse = (courseData) => {
    return db('courses').insert(courseData).returning('*');
}

// GET ALL COURSES
const getAllCourses = () => {
    return db('courses');
}

// GET COURSE BY ID
const getCourseById = (id) => {
    return db('courses').where({ auth0_id: id }).first().select('*');
}

// UPDATE COURSE
const updateCourse = (id, newCourseData) => {
    return db('courses')
        .where({ auth0_id: id })
        .first()
        .update(newCourseData)
        .returning('*');
}

// DELETE COURSE
const deleteCourse = (id) => {
    return db('courses').where({ id }).del();
}

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};
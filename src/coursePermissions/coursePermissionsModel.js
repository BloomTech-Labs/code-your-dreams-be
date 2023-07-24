const db = require('../data/db-config');

// CREATE NEW COURSE PERMISSION
const createCoursePermission = (coursePermissionData) => {
    return db('course_permissions').insert(coursePermissionData).returning('*');
}

// GET ALL COURSE PERMISSIONS
const getAllCoursePermissions = () => {
    return db('course_permissions');
}

// GET COURSE PERMISSION BY ID
const getCoursePermissionById = (id) => {
    return db('course_permissions').where({ auth0_id: id }).first().select('*');
}

// UPDATE COURSE PERMISSION
const updateCoursePermission = (id, newCoursePermissionData) => {
    return db('course_permissions')
        .where({ auth0_id: id })
        .first()
        .update(newCoursePermissionData)
        .returning('*');
}

// DELETE COURSE PERMISSION
const deleteCoursePermission = (id) => {
    return db('course_permissions').where({ id }).del();
}

module.exports = {
    createCoursePermission,
    getAllCoursePermissions,
    getCoursePermissionById,
    updateCoursePermission,
    deleteCoursePermission
};
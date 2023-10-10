const db = require('../data/db-config');

// CREATE NEW COURSE MATERIAL
const createCourseMaterial = (courseMaterialData) => {
    return db('course_materials').insert(courseMaterialData).returning('*');
}

// GET ALL COURSE MATERIALS
const getAllCourseMaterials = () => {
    return db('course_materials');
}

// GET COURSE MATERIAL BY ID
const getCourseMaterialById = (id) => {
    return db('course_materials').where({ id: id }).first().select('*');
}

// GET COURSE MATERIAL BY COURSE ID
const getMaterialByCourseId = (id) => {
    return db('course_materials').where({ course_id: id }).select('*');
}

// UPDATE COURSE MATERIAL
const updateCourseMaterial = (id, newCourseMaterialData) => {
    return db('course_materials')
        .where({ id: id })
        .first()
        .update(newCourseMaterialData)
        .returning('*');
}

// DELETE COURSE MATERIAL
const deleteCourseMaterial = (id) => {
    return db('course_materials').where({ id }).del();
}

module.exports = {
    createCourseMaterial,
    getAllCourseMaterials,
    getCourseMaterialById,
    getMaterialByCourseId,
    updateCourseMaterial,
    deleteCourseMaterial
};
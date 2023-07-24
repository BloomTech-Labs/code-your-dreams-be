const db = require('../data/db-config');

// CREATE NEW MATERIAL TYPE
const createMaterialType = (materialTypeData) => {
    return db('material_types').insert(materialTypeData).returning('*');
}

// GET ALL MATERIAL TYPES
const getAllMaterialTypes = () => {
    return db('material_types');
}

// GET MATERIAL TYPE BY ID
const getMaterialTypeById = (id) => {
    return db('material_types').where({ auth0_id: id }).first().select('*');
}

// UPDATE MATERIAL TYPE
const updateMaterialType = (id, newMaterialTypeData) => {
    return db('material_types')
        .where({ auth0_id: id })
        .first()
        .update(newMaterialTypeData)
        .returning('*');
}

// DELETE MATERIAL TYPE
const deleteMaterialType = (id) => {
    return db('material_types').where({ id }).del();
}

module.exports = {
    createMaterialType,
    getAllMaterialTypes,
    getMaterialTypeById,
    updateMaterialType,
    deleteMaterialType
};
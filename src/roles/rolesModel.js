const db = require('../data/db-config');

// CREATE NEW ROLE
const createRole = (roleData) => {
    return db('roles').insert(roleData).returning('*');
}

// GET ALL ROLES
const getAllRoles = () => {
    return db('roles');
}

// GET ROLE BY ID
const getRoleById = (id) => {
    return db('roles').where({ id: id }).first().select('*');
}

// UPDATE ROLE
const updateRole = (id, newRoleData) => {
    return db('roles')
        .where({ id: id })
        .first()
        .update(newRoleData)
        .returning('*');
}

// DELETE ROLE
const deleteRole = (id) => {
    return db('roles').where({ id: id }).del();
}

module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
};
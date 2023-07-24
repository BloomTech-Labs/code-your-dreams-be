const db = require('../data/db-config');

// CREATE NEW USER
const createUser = (userData) => {
    return db('users').insert(userData).returning('*');
}

// GET ALL USERS
const getAllUsers = () => {
    return db('users');
}

// GET USER BY ID
const getUserById = (id) => {
    return db('users').where({ auth0_id: id }).first().select('*');
}

// UPDATE USER
const updateUser = (id, newUserData) => {
    return db('users')
        .where({ auth0_id: id })
        .first()
        .update(newUserData)
        .returning('*');
}

// DELETE USER
const deleteUser = (id) => {
    return db('profiles').where({ id }).del();
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
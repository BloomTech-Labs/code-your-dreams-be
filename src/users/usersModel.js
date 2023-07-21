const db = require('../data/db-config');

// CREATE NEW USER
export const createUser = (userData) => {
    return db('users').insert(userData).returning('*');
}

// GET ALL USERS
export const getAllUsers = () => {
    return db('users');
}

// GET USER BY ID
export const getUserById = (id) => {
    return db('users').where({ id }).first().select('*');
}

// UPDATE USER
export const updateUser = (id, newUserData) => {
    return db('users')
        .where({ auth0_id: id })
        .first()
        .update(newUserData)
        .returning('*');
}

// DELETE USER
export const deleteUser = (id) => {
    return db('profiles').where({ id }).del();
}
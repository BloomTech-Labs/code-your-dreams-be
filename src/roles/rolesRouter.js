const express = require('express')
const router = express.Router()
const Roles = require('./rolesModel')

const {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
} = Roles

// Get all roles
router.get('/', function(req, res) {
    getAllRoles()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message })
        })
})

// Create new role
router.post('/create', function(req, res) {
    createRole(req.body)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message })
        })
})

// Get role by ID
router.post('/:id', function(req, res) {
    getRoleById(req.params.id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message })
        })
})

// Update role
router.post('update/:id', function(req, res) {
    updateRole(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message })
        })
})

// Delete role
router.delete('/delete/:id', function (req, res) {
    deleteRole(req.params.id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message })
        })
})

module.exports = router
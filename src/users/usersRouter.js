const express = require('express');
const router = express.Router();
const Users = require('./usersModel');

// Get all users
router.get('/', function (req, res) {
    Users.getAllUsers()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Create new user
router.post('/create', function (req, res) {
    Users.createUser(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get user by ID
router.get('/:id', function (req, res) {
    Users.getUserById(req.params.id)
        .then((response) => {
            console.log(response);
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update user
router.post('/update/:id', function (req, res) {
    Users.updateUser(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete user
router.delete('/delete/:id', function (req, res) {
    Users.deleteUser(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
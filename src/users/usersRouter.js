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

// Update user

// Delete user

module.exports = router;
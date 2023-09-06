const express = require('express');
const router = express.Router();
const Users = require('./usersModel');
const axios = require ("axios");

// Get all users
router.get('/', function (req, res) {
    console.log(req.auth.payload);
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
    const auth0ReqBody = {
        client_id: `${process.env.AUTH0_CLIENT_ID}`,
        client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
        audience: `${process.env.AUTH0_ISSUER_URL}api/v2/`,
        grant_type: "client_credentials"
    }
    // GET TOKEN FROM AUTH0
    axios.post(`${process.env.AUTH0_ISSUER_URL}oauth/token`, auth0ReqBody)
        .then(tokenRes => {
            let headers = {
                'Authorization': `Bearer ${tokenRes.data.access_token}`
            }
            let authReqBody = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                email_verified: false,
                connection: "Username-Password-Authentication"
            }
            // CREATE USER ON AUTH0
            axios.post(`${process.env.AUTH0_ISSUER_URL}api/v2/users`, authReqBody, { headers: headers })
                .then(authRes => {
                    let newUser = {
                        auth0_id: authRes.data.user_id,
                        name: authRes.data.name,
                        email: authRes.data.email,
                        role: req.body.role,
                        chapter_id: req.body.chapter_id
                    }
                    // CREATE USER ON DB
                    Users.createUser(newUser)
                        .then((response) => {
                            res.status(200).json(response);
                        })
                        .catch((err) => {
                            console.error(err);
                            res.status(err.status).json({ message: err.message });
                        })
                })
                .catch(err => {
                    console.error(err);
                    res.status(err.status).json({ message: err.message });
                })
        })
        .catch(err => {
            console.error(err);
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
const express = require('express');
const router = express.Router();
const CourseMaterials = require('./courseMaterialsModel');

// Get all course materials
router.get('/', function (req, res) {
    CourseMaterials.getAllCourseMaterials()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Create new course material
router.post('/create', function (req, res) {
    CourseMaterials.createCourseMaterial(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get course material by ID
router.get('/:id', function (req, res) {
    CourseMaterials.getCourseMaterialById(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update course material
router.post('/update/:id', function (req, res) {
    CourseMaterials.updateCourseMaterial(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete course material
router.delete('/delete/:id', function (req, res) {
    CourseMaterials.deleteCourseMaterial(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
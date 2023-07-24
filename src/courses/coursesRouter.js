const express = require('express');
const router = express.Router();
const Courses = require('./coursesModel');

// Get all courses
router.get('/', function (req, res) {
    Courses.getAllCourses()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Create new course
router.post('/create', function (req, res) {
    Courses.createCourse(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get course by ID
router.get('/:id', function (req, res) {
    Courses.getCourseById(req.params.id)
        .then((response) => {
            res.status(200).json(response[0]);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update course
router.post('/update/:id', function (req, res) {
    Courses.updateCourse(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete course
router.delete('/delete/:id', function (req, res) {
    Courses.deleteCourse(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
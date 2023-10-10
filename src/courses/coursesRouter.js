const express = require('express');
const router = express.Router();
const Courses = require('./coursesModel');
const Materials = require('../courseMaterials/courseMaterialsModel');
const Permissions = require('../coursePermissions/coursePermissionsModel');

// Get all courses
router.get('/', function (req, res) {
    Courses.getAllCourses()
        .then(async (response) => {
            let result = response.map(async (i) => {
                await Materials.getMaterialByCourseId(i.id)
                    .then((materials) => {
                        i.materialsCount = materials.length
                    })
                await Permissions.getPermissionByCourseId(i.id)
                    .then((permissions) => {
                        i.permissionsCount = permissions.length
                    })
                return i
            })
            Promise.all(result).then((courses) => {
                res.status(200).json(courses);
            })
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
            res.status(200).json(response);
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
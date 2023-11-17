const express = require('express');
const router = express.Router();
const CoursePermissions = require('./coursePermissionsModel');
const Courses = require('../courses/coursesModel');

// Get all course permissions
router.get('/', function (req, res) {
    CoursePermissions.getAllCoursePermissions()
        .then(async (response) => {
            let permissions = response.map(async (i) => {
                await Courses.getCourseById(i.course_id)
                .then((course) => {
                    i.course_name = course.name;
                })
                return i;
            })
            Promise.all(permissions).then((permissions) => {
                res.status(200).json(permissions);
            })
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Create new course permission
router.post('/create', function (req, res) {
    CoursePermissions.createCoursePermission(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get course permission by ID
router.get('/:id', function (req, res) {
    CoursePermissions.getCoursePermissionById(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update course permission
router.post('/update/:id', function (req, res) {
    CoursePermissions.updateCoursePermission(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete course permission
router.delete('/delete/:id', function (req, res) {
    CoursePermissions.deleteCoursePermission(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
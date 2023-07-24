const express = require('express');
const router = express.Router();
const Chapters = require('./chaptersModel');

// Get all chapters
router.get('/', function (req, res) {
    Chapters.getAllChapters()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Create new chapter
router.post('/create', function (req, res) {
    Chapters.createChapter(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get chapter by ID
router.get('/:id', function (req, res) {
    Chapters.getChapterById(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update chapter
router.post('/update/:id', function (req, res) {
    Chapters.updateChapter(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete chapter
router.delete('/delete/:id', function (req, res) {
    Chapters.deleteChapter(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
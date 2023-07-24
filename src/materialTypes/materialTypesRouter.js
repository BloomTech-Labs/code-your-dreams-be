const express = require('express');
const router = express.Router();
const MaterialTypes = require('./materialTypesModel');

// Get all material types
router.get('/', function (req, res) {
    MaterialTypes.getAllMaterialTypes()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Create new material type
router.post('/create', function (req, res) {
    MaterialTypes.createMaterialType(req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(err.status).json({ message: err.message });
        })
})

// Get material type by ID
router.get('/:id', function (req, res) {
    MaterialTypes.getMaterialTypeById(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
})

// Update material type
router.post('/update/:id', function (req, res) {
    MaterialTypes.updateMaterialType(req.params.id, req.body)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

// Delete material type
router.delete('/delete/:id', function (req, res) {
    MaterialTypes.deleteMaterialType(req.params.id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        })
})

module.exports = router;
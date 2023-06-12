const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('You have hit the GET /start endpoint!');
})

module.exports = router;
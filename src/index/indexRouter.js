const express = require('express');
var router = express.Router();
const { checkJwt } = require('../middleware');

router.get('/', function (req, res) {
  res.status(200).json({ api: 'up', timestamp: Date.now() });
});

router.get('/protected-route', checkJwt, function (req, res) {
  try {
    res.status(200).json({ message: 'successfully hit protected route' })
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

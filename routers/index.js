'use strict'

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('hiksss')
})

module.exports = router;

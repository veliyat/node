var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users', { title: 'Users Page',host:config.host });
});

module.exports = router;

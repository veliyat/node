var express = require('express');
var router = express.Router();
var config = require('../config');
var mongoose = require('mongoose');
mongoose.model('users',{name:String});
/* GET users listing. */
router.get('/', function(req, res) {
  // res.render('users', { title: 'Users Page',host:config.host });
  mongoose.model('users').find(function(err,users){
  	console.log(users);
  	res.render('users', { title: 'Users Page',host:config.host,users: users });
  });
});

module.exports = router;

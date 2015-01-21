var express = require('express');
var router = express.Router();
var config = require('../config');
var mongoose = require('mongoose');

/**
 * Creating `users` collection in mongo db if not exists.
 */
mongoose.model('users', {
							name:String
						}
			);

/**
 * Send users stored in `users` collection in default `json` format
 * @param  {object} req  [Request Object]
 * @param  mixed res [Response Object]
 * @return mixed      [Mixed Response - Can be anything html, xml, json or any other format]
 */
router.get('/', function (req, res) {
	res.render('users', { title: 'Users Page',host:config.host});
});

router.get('/all', function (req, res) {

  mongoose.model('users').find(function (err, users) {
  	
  	res.render('users', { title: 'Users Page',host:config.host,users: users });
  	// res.send(users); // Send all data in default format `json` 

  });
});

router.get('/asc', function (req, res) {

  var users = mongoose.model('users').find();     // Fetching all rows from table
  users.sort('name');                             // Sort by name ascending
  users.exec(function (err, users){               // Execute query
  	res.render('users', { title: 'Users Page',host:config.host,users: users });
  	// res.send(users);
  });

});

router.get('/desc', function (req, res) {

  var users = mongoose.model('users').find();     // Fetching all rows from table
  users.sort('-name');                            // Sort by name ascending
  users.exec(function (err, users){               // Execute query
  	res.render('users', { title: 'Users Page',host:config.host,users: users });
  	// res.send(users);
  });
});

module.exports = router;

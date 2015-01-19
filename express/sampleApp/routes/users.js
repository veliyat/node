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

  mongoose.model('users').find(function (err, users) {
  	
  	// res.render('users', { title: 'Users Page',host:config.host,users: users });
  	res.send(users); // Send all data in default format `json` 

  });
});

module.exports = router;

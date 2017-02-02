var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('assainar',
   { title: 'Assainar',
   message: 'He is my Father and also retired teacher .He is guiding light of my heights ',
   relation: 'Father',
   occupation: 'Manager in Medical Pharmacy'
 }
 );
});

module.exports = router;

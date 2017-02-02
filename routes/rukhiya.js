var express = require('express');
var router = express.Router();

/* GET mother page. */
router.get('/', function(req, res, next) {
  res.render('rukhiya',
   { title: 'Rukhiya',
   message: 'she is my mother known as queen in my home .she is my everything ',
   relation: 'mother',
   occupation: 'Ruling the family'
 }
 );
});

module.exports = router;

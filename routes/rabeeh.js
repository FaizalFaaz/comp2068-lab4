var express = require('express');
var router = express.Router();

/* GET mother page. */
router.get('/', function(req, res, next) {
  res.render('rabeeh',
   { title: 'rabeeh',
   message: 'He is my one and only brother and my best friend who never leave me  ',
   relation: 'Brother',
   occupation: 'Marketing Manager'
 }
 );
});

module.exports = router;

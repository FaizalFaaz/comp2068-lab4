var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faizal',
   { title: 'Ahammed Faizal',
   message: 'hey there Here im Ahammed Faizal Studying in Georgian college ',
   program: 'computer programmer',
   occupation: 'student'
 }
 );
});

module.exports = router;

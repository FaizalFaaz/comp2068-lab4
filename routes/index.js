var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   { title: 'My Family',
   message: 'hey there Here im introducing me and my Family Members So select each one plz   my Family includes 4 members me Father,mother and a Brother.'
  ,eachone:'my Father is a manager in Ayurvedic Pkharmacy'}
 );
});

module.exports = router;

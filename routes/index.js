var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/policy', function(req, res, next) {
  res.render('policy');
});

router.get('/terms', function(req, res, next) {
  res.render('terms');
});
module.exports = router;

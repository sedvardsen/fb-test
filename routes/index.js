var express = require('express');
var router = express.Router();
const cJson = require('circular-json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', req:cJson.stringify(req) });
});

router.get('/about', function(req, res, next) {
  res.render('about',{req:cJson.stringify(req) });
});

router.get('/policy', function(req, res, next) {
  res.render('policy',{req:cJson.stringify(req)});
});

router.get('/terms', function(req, res, next) {
  res.render('terms',{req:cJson.stringify(req)});
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index/Login');
});

router.get('/userList', function (req, res, next) {
  res.render('index/LoginList.html')
});
module.exports = router;
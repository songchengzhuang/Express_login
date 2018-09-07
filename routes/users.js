var express = require('express');
var router = express.Router();
var query = require("../public/javascripts/sqlConfig");

/* post添加 */
router.post('/', function (req, res, next) {
  // 输出 JSON 格式
  var response = {
    "name": req.body.name,
    "age": req.body.age
  };
  var addSql = 'INSERT INTO study_tbl(name,age) VALUES(?,?)';
  var addSqlParArr = [req.body.name, req.body.age];
  query(addSql, addSqlParArr, function (err, rows, fields) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "数据添加失败！",
        success: false
      });
    } else {
      res.json({
        data: response,
        code: 200,
        message: "数据添加成功！",
        success: true
      });
    }
  });
});

// 查询
router.get('/getUserList', function (req, res, next) {
  // 输出 JSON 格式
  var addSql = 'SELECT * FROM study_tbl';
  query(addSql, function (err, rows, fields) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "数据查询失败！",
        success: false
      });
    } else {
      res.json({
        data: rows,
        code: 200,
        message: "数据查询成功！",
        success: true
      });
    }
  });
});

module.exports = router;
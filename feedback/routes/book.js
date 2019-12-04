
var express = require('express');
var router = express.Router();
var connection = require('../conf/mysql.js');
/* GET users listing. */
//增加书籍
router.post('/add', function (req, res) {
    var bookname = req.body.bookname;
    var author = req.body.author;
    var price = req.body.price;
    var ISBN = req.body.ISBN;
    var pubHouse = req.body.pubHouse;
    var pubDate = req.body.pubDate;
    var bookCate = req.body.bookCate;
    var introduction = req.body.introduction;
    console.log('书籍名称：' + bookname);

    sql = `insert into book(bookname,author,price,ISBN,pubHouse,pubDate,bookCate,introduction) values("${bookname}","${author}","${price}","${ISBN}","${pubHouse}","${pubDate}","${bookCate}","${introduction}")`;
    //  sql=`select * from user`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(401).send({
                data: error
            })
        } else {
            res.send({
                data: "OK"
            })
        }

    })
})
//删除书籍
router.delete('/off', function (req, res) {
    var ISBN = req.body.ISBN;
    console.log('ISBN' + ISBN);
    sql = `delete from book where ISBN="${ISBN}" `;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.status(401).send({
                data: error
            })
        } else {
            console.log(result);
            res.send({
                data: "OK"
            })
        }

    })
})
//获取所有书籍
router.get('/book', function (req, res) {
    sql = `select * from book`;
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        } else {
             res.send(result)
        }
    })
})
module.exports = router;

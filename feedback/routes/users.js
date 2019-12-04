
var express = require('express');
 var router = express.Router();
 var connection = require('../conf/mysql.js');
/* GET users listing. */
//用户注册
router.post('/user',function(req,res){
  var username=req.body.username;
  var password=req.body.password;
  console.log('账号：'+username);
  if(username=='admin')
    var role=1;
  else
    var role=2;
  sql=`insert into user(username,password,role) values("${username}","${password}","${role}")`;
  //  sql=`select * from user`;
  connection.query(sql,function(err,result){
    if(err){
      console.log(err.errno);
      if(err.errno==1062){
        res.status(401).send({
          status:-1,
          msg:'用户名已被注册',
        })
      }
      else{
        res.status(401).send({
          status:-1,
          msg:'注册失败',
        })
      }
    }else{
      res.send({
          status:1,
          data:{
            userId:result.insertId,
            msg:"register successfully",
            avatar:'',
          }
        })
      }
     
  }) 
})
module.exports = router;

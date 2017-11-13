const model = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

class userController {
  static dataUser(req, res){
    var token=req.headers.token
    jwt.verify(token,'halo',function (err,decoded){
      model.User.findAll()
      .then(dataU=>{
        // console.log(decoded);
        // res.send(dataU)
        if(decoded.role==='admin'){
          res.send(dataU)
        }
      })

    })
  }
  // }

  static dataOneUser(req,res){
    var token=req.headers.token;
    jwt.verify(token,'halo',function(err,decoded){
      // console.log(decoded);
      if(decoded.role=='user'|| decoded.role=='admin'){
        model.User.findAll({
          where:{id:req.params.id}
        })
        .then(dataU=>{
          res.send(dataU)
        })
      }
    })
  }

  static createUser(req,res){
    model.User.create({
      name:req.body.name,
      password:req.body.password,
      role:req.body.role
    })
    .then(()=>{
      res.send('data Masuk')
    })
  }

  static deleteUser(req,res){
    var token=req.headers.token;
    jwt.verify(token,'halo',function(err,decoded){
      if(decoded.role=='admin'){
        model.User.destroy({
          where:{id:req.params.id}
        })
        .then(()=>{
          res.send('data ilang')
        })
        .catch(err=>{
          res.send(err)
        })
      }
    })
  }

  static editUser(req,res){
    var token=req.headers.token;
    jwt.verify(token,'halo',function(err,decoded){
      if(decoded.role=='admin'|| decoded.role=='user'){
        model.User.update({
          name:req.body.name,
          password:req.body.password,
          role:req.body.role
        },{
          where:{
            id:req.params.id}
          })
          .then(()=>{
            res.send('data terUpdate')
          })
          .catch(err=>{
            res.send(err)
          })
      }
    })
  }

  static signUpUser(req,res){
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        model.User.create({
          name:req.body.name,
          password:hash,
          role:req.body.role,
          salt:hash
        })
        .then(()=>{
          res.send('user baru sudah dibuat')
        })

      });
    });
  }

  static signInUser(req,res){
    model.User.findOne({
      where:{name:req.body.name}
    })
    .then(dataU=>{
      let compare=bcrypt.compareSync(req.body.password, dataU.salt);
      if(compare== true){
        let obj={
          name:dataU.name,
          role:dataU.role
        }
        let token = jwt.sign(obj,'halo')
        res.send(token)
      }
    })
  }
}
module.exports = userController;

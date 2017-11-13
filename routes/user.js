var express = require('express');
var router = express.Router();
var userController=require('../controllers/user')
/* GET users listing. */
router.get('/user', userController.dataUser);
router.get('/user/:id',userController.dataOneUser)
router.delete('/user/:id',userController.deleteUser)
router.post('/user',userController.createUser)
router.put('/user/:id',userController.editUser)
router.post('/user/signup',userController.signUpUser)
router.post('/user/signin',userController.signInUser)

module.exports = router;

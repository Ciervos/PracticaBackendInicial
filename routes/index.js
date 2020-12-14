var express = require('express');
var router = express.Router();
const UserController = require ("./../controllers/userController");

UserInstance = new UserController()

/* GET home page. */
router.get('/', function(req, res, next) {
  UserInstance.showUsers(req,res)
});

router.post('/user', function(req, res, next) {
  UserInstance.postUsers(req,res)
});

router.put('/modify', function(req, res, next) {
  UserInstance.changeUsers(req,res)
});

router.delete('/delete', function(req, res, next) {
  UserInstance.byeUsers(req,res)
});

module.exports = router;

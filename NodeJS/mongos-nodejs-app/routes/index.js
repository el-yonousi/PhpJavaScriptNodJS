var express = require('express');
var router = express.Router();

const controle = require('../controller/user_controle')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* POST home page*/
router.post('/insert', controle.insertUser)

/* GET All users */
router.get('/getUsers', controle.getUsers)

/* Update user */
router.post('/update', controle.updateUser)

/* POST delete user */
router.post('/delete', controle.deleteUser)
module.exports = router;
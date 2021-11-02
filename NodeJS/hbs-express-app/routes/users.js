var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator/check');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('users/users');
});

router.get('/info/:id', (req, res, next) => {
    res.render('users/info', { id: req.params.id });
});

// POST
// router.post('/info', (req, res, next) => {
//     req.check('login', 'invalidLogin').not().isEmpty().isEmail()
//     res.redirect(`info/${req.body.login}`)
// });

router.post('/info', [
        check('login', 'Email is not valid').isEmail(),
        check('login', 'Email must not empty').not().isEmpty(),
        check('password', 'password length must greather than or equal 10').isLength(10),
        check('password', 'password must not empty').not().isEmpty(),
    ],
    (req, res, next) => {
        // Check Errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            req.session.success = false;
            req.session.errors = errors.array();
            console.log(errors.array());
            res.redirect('/')
                // res.render('index', { errors: errors.array() })
                // return res.status(400).json({ errors: errors.array() });
        } else {
            req.session.success = true;
            req.session.errors = null;
            res.redirect(`info/${req.body.login}`)
        }
    });

module.exports = router;
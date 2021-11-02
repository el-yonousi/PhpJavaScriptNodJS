var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        condition: true,
        anyarray: [15, 21, 23, 65, 89],
        success: req.session.success,
        errors: req.session.errors
    });
});

router.get('/about', (req, res, next) => {
    res.render('about', { title: 'About' })
})

router.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'About' })
})

module.exports = router;
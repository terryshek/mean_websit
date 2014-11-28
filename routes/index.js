var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.params)
    res.render('index', { title: 'MEAN WEBSITE' });
    //res.sendfile(__dirname+"/client/index.html");
});
/* GET home page. */
router.get('/login', function(req, res) {
    console.log('run')
    res.render('index', { title: 'login' });
})



module.exports = router;

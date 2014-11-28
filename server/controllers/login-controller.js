var login = require('../../models/login');

module.exports.create = function(req, res){
    console.log(req.body);
    var login =new login(req.body);
    login.save(function(err,result){
        res.json(result);
    });
}
module.exports.list = function(req, res){
    login.find({},function(err,results){
        res.json(results)
    })
}
///* GET /todos/id */
//router.get('/:id', function(req, res, next) {
//    console.log(req.params.id)
//    Todo.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

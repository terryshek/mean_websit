var express =require('express'),
    app =express(),
    bodyParser = require('body-parser'),
    mongooose = require('mongoose'),
    routes = require('./routes/index'),
    path = require('path'),
    meetupsController = require('./server/controllers/meetup-controller'),
    loginController = require('./server/controllers/login-controller');

mongooose.connect("mongodb://localhost:27017/mean-demo");

app.use(bodyParser());

//app.get('/',function(req, res){
//    res.sendfile(__dirname+"/client/index.html");
//});
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'ejs');
app.use('/', routes);
app.get('/:name',function(req, res){
    console.log(req.params)
    res.sendfile(__dirname+"/client/views/"+req.params.name);
});

app.use('/js',express.static(__dirname+"/client/js"))
app.use('/vendor',express.static(__dirname+"/client/vendor"))

//rest meepup api
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);
//rest login api
app.get('/api/login',loginController.list);
app.post('/api/login',loginController.create);

app.listen(3000, function() {
    console.log("I am listening port 3000!");
});


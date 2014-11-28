var mongoose = require('mongoose');
var meetupSchema = new mongoose.Schema({
    name:String
})

module.exports =  mongoose.model('Meetup',meetupSchema);

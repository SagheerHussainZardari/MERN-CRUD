const mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
        email: {
            type: String
        },
        password: {
            type: String
        },
});
// Compile model from schema
module.exports =  mongoose.model('Users', Users );

const mongoode = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required : true
    },
    shortname : {
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});
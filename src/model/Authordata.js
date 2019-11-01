const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/libraryDB');
mongoose.connect('mongodb+srv://pk:pk@cluster0-fkgiu.mongodb.net/libraryDB?retryWrites=true&w=majority');
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority

const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorName : String,
    authorAddress:String,
    authorPhone:String,
    authorImage:String
   
});

var Authordata = mongoose.model('author', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;

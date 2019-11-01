const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/libraryDB');
mongoose.connect('mongodb+srv://pk:pk@cluster0-fkgiu.mongodb.net/libraryDB?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://pk:pk@cluster0-yxuce.mongodb.net/ProductDb?retryWrites=true&w=majority');
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://pk:<password>@cluster0-yxuce.mongodb.net/test?retryWrites=true&w=majority

const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    booksTitle : String,
    author:String,
    gener:String,
    desciption:String,
    price:Number,
    urlToImage:String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;
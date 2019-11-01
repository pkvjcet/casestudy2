var express=require('express');
var bodyParser=require('body-parser');
var app=new express();
const path=require('path');
var bookrouter=require('./routes/books')
var authorsrouter=require('./routes/authors')
var db=require('./routes/db')
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")));
app.use('/',bookrouter);
app.use('/author',authorsrouter);
app.use('/db',db)
app.use(cors());

app.set('view engine','ejs');






app.listen(process.env.PORT || 3000,()=>{
    console.log("Listening")
})
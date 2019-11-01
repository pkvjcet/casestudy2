var books_array=[];
   

const express=require('express');
const router=express.Router();
const Bookdata=require("../src/model/Bookdata");




router.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Bookdata.find()
                .then(function(books){
                   books_array=JSON.parse(JSON.stringify(books));
                   res.render('index',{books_array:books_array})
                });
                console.log(books_array);   
   
})
router.get('/addbook',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.render('addbook')
   
})
router.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var book = {       
        booksTitle:req.body.b_title,
        author:req.body.b_auther,
        gener:req.body.b_gener,
        desciption:req.body.b_desc,
        price:req.body.b_price,
        urlToImage:req.body.b_url
   } 
   //console.log(req.body);      
  var booknew = new Bookdata(book);
  booknew.save();   
//   console.log(req.body);  
//   for(var i=0;i<200;i++){
//     for(var j=0;i<100;i++){
//         for(var k=0;i<100;i++)
//         {}
//     }
//   }
  
 

//   Bookdata.find()
//                 .then(function(books){
//                    books_array=JSON.parse(JSON.stringify(books));
//                    res.render('index',{books_array:books_array})
//                 });

  //res.send(req.body) ;          
   
})
module.exports=router;
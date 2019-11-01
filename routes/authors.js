var authors_array=[];
const express=require('express');
const router=express.Router();
const Authordata=require("../src/model/Authordata");

router.get('/add',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.render('addauthor')
   
})

router.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var author = {       
        authorName:req.body.a_name,
        authorAddress:req.body.a_addr,
        authorPhone:req.body.a_phone,
        authorImage:req.body.a_url       
   } 
      
  var authornew = new Authordata(author);
  authornew.save();
  
})

router.get('/view',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');

    Authordata.find()
                .then(function(authors){
                    authors_array=JSON.parse(JSON.stringify(authors));
                    res.render('viewauthor',{authors_array:authors_array})
                });
   
   
})

module.exports=router;


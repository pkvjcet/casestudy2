const express=require('express');
const router=express.Router();
const Bookdata=require("../src/model/Bookdata");
const Authordata=require("../src/model/Authordata");
const cors = require('cors');


router.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
});

router.get('/authors',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    Authordata.find()
                .then(function(authors){
                    res.send(authors);
                });
});

module.exports=router;
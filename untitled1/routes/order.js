var express = require('express');
var mysql = require('mysql');
var model = require('../models/OrderModel');
var router = express.Router();
var connect = mysql.createPool({
    host:'10.1.198.232',
    user:'newuser',
    password:'chinabj.1',
    database:'test',
    timezone:'+08:00'
});

router.use(function (req,res,next) {
    var t = new model();
    t.orderid='222';
    t.age=444;
    console.log(t.orderid,t.age);
    next();
});

router.get('/',function (req,res) {
    res.send('match order root path ');
});

router.get('/list',function (req,res) {

    var sqlstr = 'select * from autocar';
    connect.query(sqlstr,function (err,result) {
        console.log(err);
        console.log(result[0].carID);
        res.json(result[0]);
        res.end();
    });

});

router.post('/:id/:name',function (req,res) {
    console.log('--------------------------------------------------------')
    console.log(req.params.id);
    console.log(req.params.name);
    console.log('query',req.query);
    console.log(req.query.city);
    console.log(req.query.country);
    console.log('body',req.body);
    console.log(req.body.a);
    console.log(req.headers.accept);
    console.log(req.ip);
    console.log(req.ips);
    console.log('xhr',req.xhr);

    console.log(req.originalUrl,req.baseUrl,req.path);
    res.send('match order id path');
})



module.exports=router;
var express = require('express');
var router = express.Router();
var Worker = require('../models/WorkerModel');
/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','newuser','chinabj.1',{
    host:'10.1.198.232',
    dialect:'mysql',
    operatorsAliases:false,
    pool:{
        max:5
    },
    define:{
        timestamps:false,
        freezeTableName:true
    }
});

const Worker = sequelize.define('worker',{
    wid:{type:Sequelize.BIGINT,
        primaryKey:true
    }
});
*/

router.use(function (req,res,next) {
   console.log("router-users-root") ;
   next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {

    var sqlstr = 'select * from worker where wid=? or wid=?;';

    /*
    sequelize.query(sqlstr,{
        replacements:[1,4]
    }).spread(function (results,metadata) {
        //console.log(results);
        //console.log(metadata);
    });
    */

    /*
    sequelize.query(sqlstr,{
        type:sequelize.QueryTypes.SELECT,
        replacements:[1,4]
    }).then(function (results) {
        //console.log(results);
        res.json(results);
        res.end();
    }).catch(function (reason) {

        console.log('----------------------------------------');
        console.log(reason.toString());
        console.log(reason);
        console.log('----------------------------------------');

    });
    */

    Worker.findAll().then(
        items => {
            res.json(items);
            res.end();
        });
    //res.send('respond with a resource');
});

router.get('/id',function (req,res) {

    console.log(req.originalUrl,req.baseUrl,req.path);

    res.send('match user ');
});

module.exports = router;

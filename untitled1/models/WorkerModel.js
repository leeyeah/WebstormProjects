const Sequelize = require('sequelize');
const db = require('./dbsequelize');
const Worker = db.define('worker',{
    wid:{type:Sequelize.BIGINT,
        primaryKey:true
    }
});

module.exports=Worker;

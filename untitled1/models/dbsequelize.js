const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','newuser','chinabj.1',{
    host:'10.1.198.232',
    dialect:'mysql',
    operatorsAliases:false,
    pool:{
        max:50
    },
    define:{
        timestamps:false,
        freezeTableName:true
    }
});

module.exports=sequelize;
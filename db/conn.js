const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rel_1-n', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.sync().then(()=>{
    console.log('foi');
}).catch(()=>{
    console.error('n foi');
})

module.exports = sequelize
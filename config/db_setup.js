const { Sequelize } = require('sequelize');
 const bookingModel = require('./models/booking');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);

const booking = bookingModel(sequelize, Sequelize);

sequelize.sync({ force:false }).then(()=>{
    console.log("Tablas sincronizadas");
});


module.exports = {
    booking
}
const { Sequelize } = require('sequelize');
 const bookingListModel = require('./models/booking_list');
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

const bookingList = bookingListModel(sequelize, Sequelize);

sequelize.sync({ force:false }).then(()=>{
    console.log("Tablas sincronizadas");
});


module.exports = {
    bookingList
}
module.exports = (sequelie, type) =>{
    return sequelie.define('booking',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        email: type.STRING,
        user_id: type.STRING,
        services: type.TEXT('long'),
        booking_date: type.DATE,
        adress: type.TEXT('long'),
        phone: type.STRING,
        total: type.STRING,
        status: type.STRING,
    })
}
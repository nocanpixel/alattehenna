module.exports = (sequelie, type) =>{
    return sequelie.define('booking_list',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        email: type.STRING,
        user_id: type.STRING,
    })
}
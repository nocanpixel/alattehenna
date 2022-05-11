import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { booking } from '../../../config/db_setup';
require('dotenv');

export default withApiAuthRequired(async function getBookings(req,res){
    const { user } = getSession(req, res);
    const userId = user[process.env.USER_IDENTITIES][0].user_id;
    try {
        const getBooking = await booking.findAll({where: { user_id: userId }, order:[['id','DESC']]});
        res.json(getBooking);
    }catch(error){
        console.error(error);
    }

})
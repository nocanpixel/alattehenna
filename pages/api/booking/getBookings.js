import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { bookingList } from '../../../config/db_setup';
require('dotenv');
export default withApiAuthRequired(async function getBookings(req,res){
    const { user } = getSession(req, res);
    const userId = user[process.env.USER_IDENTITIES][0].user_id;
    try {
        res.json(user);
    }catch(error){
        console.error(error);
    }

})
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { bookingList } from '../../../config/db_setup';
require('dotenv');

export default withApiAuthRequired(async function createBooking(req, res) {
    if (req.method === 'POST') {
        const { user } = getSession(req, res);
        const userId = user[process.env.USER_IDENTITIES][0].user_id;
        const name = req.body.name;
        const email = user.email;
        console.log(name,'LOL');
        try {
            const createBooking = await bookingList.create({
                user_id: userId,
                name: name,
                email: email,
            });
            if (createBooking) {
                res.json({
                    message: 'Item added successfully',
                })
            } else {
                res.json({
                    error: 'Something went wrong'
                })
            }
        } catch (error) {
            console.error(error);
        }
    }else{
        res.status(500).send({error:'Something failed!'});
    }
})
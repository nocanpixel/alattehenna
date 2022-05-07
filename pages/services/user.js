import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_AUTH0_API_EXPLORER_DOMAIN;
const API_TOKEN = process.env.NEXT_PUBLIC_AUTH0_API_TOKEN;

const roles = async (userId) => {
    const { data } = await axios.get(`${BASE_URL}/users/${userId.sub}/roles`,{
        headers: {
            Authorization: 'Bearer '+ API_TOKEN
        }
    });
    return data;
}

const exportedObject = {
    roles
}

export default exportedObject;
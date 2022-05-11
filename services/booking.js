import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_MY_API;

const getBookings = async () =>{
    const {data} = await axios.get(`${baseUrl}/booking/getBookings`);
    return data;
}

const getBookingByUser = async () => {
    const { data } = await axios.get(`${baseUrl}/booking/getBookingByUser`);
    return data;
}

const createBooking = async (bookingData) =>{
    const {data} = await axios.post(`${baseUrl}/booking/createBooking`,bookingData);
    return data;
}

export { getBookings, createBooking, getBookingByUser }
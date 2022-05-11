//Auth
import { useUser } from '@auth0/nextjs-auth0';

//STYLES
import { Text, Tooltip, Grid, Avatar } from '@nextui-org/react';
import Navbar from './navbar';
import { createBooking, getBookings, getBookingByUser } from '../services/booking';
import { useEffect, useState } from 'react';
import MyStyles from "../styles/MyStyles.module.css";

//MATERIAL UI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Loading from './loading';


import { format } from 'date-fns';
import Link from 'next/link';

export default function Home() {
    const { user, isLoading } = useUser();
    const [fetchingData, setFetchingData] = useState(false);
    const [bookingsByUser, setBookingsByUser] = useState([])

    const currencyFormatter = new Intl.NumberFormat("uk-UK", {
        style: "currency",
        currency: "GBP",
    });

    useEffect(() => {
        setFetchingData(true);
        fetchBookingByUser();
    }, [])

    const fetchCreateBooking = async () => {
        try {
            const res = await createBooking({
                name: { myName: 'Fatima Ali Saidi' }
            });
            if (res) {
                console.log(res);
            }
        } catch (err) {
            console.error(err);
        }
    }

    const fetchBookingByUser = async () => {
        try {
            const res = await getBookingByUser();
            if (res) {
                setBookingsByUser(res);
                setFetchingData(false);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='w-11/12 md:w-9/12 lg:w-6/12 m-auto'>
            <div className='h-auto mb-28 my-4'>
                <div className={`${MyStyles.card__location} pb-4 w-full hover:opacity-75 transition ease-in-out delay-50 duration-300`}>
                    <div className='w-full h-full flex justify-start items-center'>
                        {/* BODY */}
                        <div className="cursor-pointer">
                            <Text css={{ color: 'black' }} weight={'bold'} h2>Easy and fast bookings</Text>
                        </div>
                    </div>
                </div>
                {/* BOOKING */}
                <div className={`${MyStyles.card__book} w-full rounded-xl shadow-md p-10 hover:opacity-90 transition ease-in-out delay-50 duration-300`}>
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        <div>
                            {/* HEAD */}
                            <div className="">
                                <Text
                                    h1
                                    size={70}
                                    css={{
                                        color: 'white',
                                    }}
                                    weight="bold"
                                >
                                    HENNA
                                </Text>
                            </div>
                            {/* BODY */}
                            <div>
                                <Text css={{ marginLeft: '$3', marginTop: '$8', color: 'white' }} size={17} h4>{'Almost before we knew it, we had left the ground. Lorem ipsum honor'}</Text>
                            </div>
                            <div>
                                <Link href={'createbooking'}>
                                    <a>
                                        <button className='ml-1 mt-4 bg-white py-2 px-7 text-gray-900 opacity-40 rounded-full font-bold shadow-lg transition ease-in-out delay-50 duration-300 hover:opacity-80'>BOOK HERE!</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-end items-center'>
                            <div className="w-72 md:w-56 md:-mt-2 md:-mr-4">
                                <a href="https://me-qr.com/fzPzlQ" target="_blank" rel='noopener noreferrer'>
                                    <Image
                                        src={'/images/myqrcode2.png'}
                                        width={100}
                                        height={100}
                                        priority
                                        alt={'My QR Code'}
                                        layout={'responsive'}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${MyStyles.card__location} my-5 p-4 w-full transition ease-in-out delay-50 duration-300`}>
                    <div className='w-full h-full flex justify-end items-center'>
                        {/* BODY */}
                        <div className="cursor-pointer hover:opacity-75">
                            <Text css={{ color: 'black' }} weight={'bold'} h2>{'My booking list'}</Text>
                        </div>
                    </div>
                </div>
                {!fetchingData ? (
                    <>
                        {bookingsByUser.map((ele, index) => (
                            <div key={index} className={`${MyStyles.card__location} my-5 w-full`}>
                                <div className='w-full h-full'>
                                    {/* BODY */}
                                    <div>
                                        <Grid.Container gap={1}>
                                            <Grid xs={12}>
                                                <div onClick={() => { fetchBookingByUser() }} className={`${MyStyles.cards__options} relative bg-black w-full cursor-pointer shadow-md flex justify-start items-center rounded-xl transition delay-100 duration-300 hover:scale-105`}>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-1 md:gap-6 my-4 mx-4'>
                                                        <div className='mt-20'>
                                                            <div>
                                                                {JSON.parse(ele.services).map((item, index) => (
                                                                    <span key={index} className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">{item}</span>
                                                                ))}
                                                            </div>
                                                            <div className='mt-5'>
                                                                <div>
                                                                    <Text weight={'bold'} size={55} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", color: 'white' }}>{format(new Date(ele.booking_date), "H:mm a")}</Text>
                                                                </div>
                                                                <div>
                                                                    <Text className='pl-1' size={22} css={{ color: 'white' }}>{format(new Date(ele.booking_date), "cccc, PPP")}</Text>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='m-2 md:mt-20'>
                                                            <div>
                                                                <Text size={20} css={{ color: 'white' }}>{ele.name.toUpperCase()}</Text>
                                                            </div>
                                                            <div>
                                                                <Text size={25} weight={'bold'} css={{ textGradient: "45deg, $blue200 -20%, $pink700 50%" }}>{ele.phone}</Text>
                                                            </div>
                                                            {JSON.parse(ele.adress).map((item, index) => (
                                                                <div key={index}>
                                                                    <Text size={19} css={{ color: 'white' }}>{item}</Text>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className='absolute top-5'>
                                                            <Text className='text-5xl' css={{ color: 'white' }} h1>Booking details</Text>
                                                        </div>
                                                        <div className='absolute top-2 right-4'>
                                                            <span className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-black ${ele.status === 'approved' ? 'bg-green-600' : ele.status === 'pending' ? 'bg-amber-500' : 'bg-red-600'} rounded-full`}>{ele.status.toUpperCase()}</span>
                                                        </div>
                                                        <div className='absolute bottom-6 right-5'>
                                                            <Text className='text-5xl font-bold md:text-3xl' css={{ color: 'white' }}>£ {currencyFormatter.format(ele.total)}</Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid.Container>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        LOADING
                    </>
                )}
                {bookingsByUser.length === 0 && (
                    <>
                        THERES NO DATA YET
                    </>
                )}
            </div>
            <div>
                <Navbar user={user} isLoading={isLoading} />
            </div>
        </div>
    )
}

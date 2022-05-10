//Auth
import { useUser } from '@auth0/nextjs-auth0';

//STYLES
import { Button, useTheme, Text, Tooltip, Grid, Avatar } from '@nextui-org/react';
import Navbar from './navbar';
import { createBooking, getBookings } from '../services/booking';
import { useEffect, useState } from 'react';
import MyStyles from "../styles/MyStyles.module.css";
import myqrcode from "../public/images/myqrcode.svg";

//MATERIAL UI
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import LoadingPage from './loading';

export default function Home() {
    const { user, isLoading } = useUser();
    const [value, setValue] = useState(new Date());
    const randomColor = () => {
        const myColors = ["#fd1d1d", "#405de6", "#8B0000", "#7B68EE", "#8B008B", "#9370DB", "#DA70D6", "#C71585", "#FFA500", "#000000", "#ffab40", "#7c4dff", "#008B8B"];
        const randomColor = Math.floor(Math.random() * myColors.length);
        return myColors[randomColor];
    };

    const currencyFormatter = new Intl.NumberFormat("uk-UK", {
        style: "currency",
        currency: "GBP",
    });

    const postBookings = async () => {
        try {
            const res = await createBooking({
                name: 'Fatima Saidi',
            });
            if (res) {
                console.log(res);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='w-11/12 md:w-9/12 lg:w-6/12 m-auto'>
            <div className='h-auto mb-28'>
                <div className={`${MyStyles.card__location} p-4 w-full hover:opacity-75 transition ease-in-out delay-50 duration-300`}>
                    <div className='w-full h-full flex justify-start items-center'>
                        {/* BODY */}
                        <div className="cursor-pointer">
                            <Text css={{ color: 'black' }} weight={'bold'} h2>Easy and fast bookings</Text>
                        </div>
                    </div>
                </div>
                <div className={`${MyStyles.card__book} cursor-pointer w-full rounded-xl shadow-md p-10 hover:opacity-90 transition ease-in-out delay-50 duration-300`}>
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
                                    BOOK
                                </Text>
                            </div>
                            {/* BODY */}
                            <div>
                                <Text css={{ marginLeft: '$3', marginTop: '$8', color: 'white' }} size={17} h4>{'Almost before we knew it, we had left the ground. Lorem ipsum honor'}</Text>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-end items-center'>
                            <div className="w-72 md:w-56 md:-mt-2 md:-mr-4">
                                <Image
                                    src={'/images/myqrcode2.png'}
                                    width={100}
                                    height={100}
                                    layout={'responsive'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${MyStyles.card__location} my-5 p-4 w-full transition ease-in-out delay-50 duration-300`}>
                    <div className='w-full h-full flex justify-end items-center'>
                        {/* BODY */}
                        <div className="cursor-pointer hover:opacity-75">
                            <Text css={{ color: 'black' }} weight={'bold'} h2>Start booking with us</Text>
                        </div>
                    </div>
                </div>
                <div className={`${MyStyles.card__location} my-5 w-full`}>
                    <div className='w-full h-full'>
                        {/* BODY */}
                        <div>
                            <Grid.Container gap={1}>
                                <Grid xs={12}>
                                    <div onClick={() => { postBookings() }} className={`${MyStyles.cards__options} relative bg-black w-full cursor-pointer shadow-md flex justify-start items-center rounded-xl`}>
                                        <div className='grid grid-cols-2 w-full gap-6 my-4 mx-4'>
                                            <div className='mt-14'>
                                                <div>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">GROUP</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">HOURLY</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">MIX HENNA</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">BRIDAL PACKAGE 1</span>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded-full">CUSTOM PLACES</span>
                                                </div>
                                                <div className='mt-3'>
                                                    <div>
                                                        <Text weight={'bold'} size={40} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", color: 'white' }}>{'19:10PM'}</Text>
                                                    </div>
                                                    <div>
                                                        <Text size={20} css={{color: 'white' }}>{'Tuesday 10th May 2022'}</Text>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-14'>
                                                <div>
                                                    <Text css={{ color: 'white' }}>FATIMA SAIDI MUHAMMAD ALI</Text>
                                                </div>
                                                <div>
                                                    <Text css={{ color: 'white' }}>FLAT 05</Text>
                                                </div>
                                                <div>
                                                    <Text css={{ color: 'white' }}>82 CAMBRIDGE ROAD</Text>
                                                </div>
                                                <div>
                                                    <Text css={{ color: 'white' }}>LONDON</Text>
                                                </div>
                                                <div>
                                                    <Text css={{ color: 'white' }}>NW6 5FN</Text>
                                                </div>
                                            </div>

                                            <div className='absolute top-3'>
                                                <Text size={30} css={{ color: 'white' }} h1>Booking details</Text>
                                            </div>
                                            <div className='absolute top-2 right-4'>
                                                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">CANCEL</span>
                                            </div>
                                            <div className='absolute bottom-3 right-4'>
                                                <Text size={23} css={{ color: 'white' }}>£ {currencyFormatter.format('80')}</Text>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid.Container>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Navbar user={user} isLoading={isLoading} />
            </div>
        </div>
    )
}

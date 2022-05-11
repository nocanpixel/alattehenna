import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import BookingForm from '../components/bookingform';
import Loading from '../components/loading';
import Navbar from '../components/navbar';
import { Progress } from '@nextui-org/react';
import { useState } from "react";
import MyStyles from '../styles/MyStyles.module.css'
import { Text } from '@nextui-org/react';

import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function CreateBooking() {
    const { user, isLoading } = useUser();

    const [step, setStep] = useState(1);

    const router = useRouter();


    return (
        <div className="w-11/12 md:w-9/12 lg:w-6/12 m-auto">
            <div className='h-auto my-4'>
                <div className='py-4'>
                    <div className='py-3 text-2xl '>
                        <FontAwesomeIcon onClick={() => router.back()} icon={faArrowLeft} className="text-black text-4xl cursor-pointer" />
                    </div>
                    <div className={`${MyStyles.card__location} pb-4 w-full hover:opacity-75 transition ease-in-out delay-50 duration-300`}>
                        <div className='w-full h-full flex justify-start items-center'>
                            {/* BODY */}
                            <div className="cursor-pointer">
                                <Text css={{ color: 'black' }} weight={'bold'} h2>Start your booking</Text>
                            </div>
                        </div>
                    </div>
                    <Progress color={'gradient'} animated={true} value={step} max={4} />
                </div>
                <BookingForm step={step} setStep={setStep} />
            </div>
            <div>
                <Navbar user={user} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default withPageAuthRequired(CreateBooking, {
    onRedirecting: () => <Loading />,
    onError: error => console.log(error)
});
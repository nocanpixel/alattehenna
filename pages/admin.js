import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../components/loading';

import { useRouter } from 'next/router';
import { Grid, Text } from '@nextui-org/react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import MyStyles from '../styles/MyStyles.module.css';

function Admin() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const USER_ROLE = user[process.env.NEXT_PUBLIC_NAMESPACE_USER_APP_DATA].roles[0]

    if (USER_ROLE != 'admin') {
        router.push('/');
    } else {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className='w-12/12 md:w-1/2'>
                    <div className='w-11/12 md:w-9/12 lg:w-7/12 m-auto'>
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
                                                alt={'My Qr Code'}
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
                                        <Grid.Container gap={1} justify="center">
                                            <Grid xs={12}>
                                                <div className={`${MyStyles.cards__options} bg-black hover:opacity-90 transition ease-in-out delay-50 duration-300 w-full cursor-pointer shadow-md flex justify-center items-center rounded-xl`}>
                                                    <Text className={`hover:scale-110 md:hover:scale-120 transition ease-in-out delay-50 duration-300`} css={{ color: 'white', textAlign: 'center', fontSize: 'calc(1.5em + 1vmin)' }} h4>SOMETHING</Text>
                                                </div>
                                            </Grid>
                                            <Grid xs={12}>
                                                <div className={`${MyStyles.cards__options} bg-pink-400 hover:opacity-90 transition ease-in-out delay-50 duration-300 w-full cursor-pointer shadow-md flex justify-center items-center rounded-xl`}>
                                                    <Text className={`hover:scale-110 md:hover:scale-120 transition ease-in-out delay-50 duration-300`} css={{ color: 'white', textAlign: 'center', fontSize: 'calc(1.5em + 1vmin)' }} h4>SOMETHING</Text>
                                                </div>
                                            </Grid>
                                            <Grid xs={12}>
                                                <div className={`${MyStyles.cards__options} bg-indigo-300 hover:opacity-90 transition ease-in-out delay-50 duration-300 w-full cursor-pointer shadow-md flex justify-center items-center rounded-xl`}>
                                                    <Text className={`hover:scale-110 md:hover:scale-120 transition ease-in-out delay-50 duration-300`} css={{ color: 'white', textAlign: 'center', fontSize: 'calc(1.5em + 1vmin)' }} h4>SOMETHING</Text>
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
                </div>
                <Navbar user={user} isLoading={isLoading} />
            </div>
        )
    }
}

export default withPageAuthRequired(Admin, {
    onRedirecting: () => <Loading />,
    onError: error => console.log(error)
});
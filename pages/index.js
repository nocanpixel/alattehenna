import MyStyles from "../styles/MyStyles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
// Auth
import { useUser } from '@auth0/nextjs-auth0';
import Loading from "../components/loading";

import { Button, useTheme, Text, Tooltip, Popover } from '@nextui-org/react';

export default function Login() {
    const { theme } = useTheme();
    const { user, isLoading } = useUser();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    return (
        <div>
            {isLoading && (<Loading />)}
            {!isLoading && !user && (
                <div className="container my-10 flex justify-center items-center">
                    <div className="w-11/12 p-4 bg-white shadow-lg rounded-lg flex justify-center items-center">
                        <div className="container flex justify-center items-center">
                            <div className="text-center py-2 my-2 w-11/12">
                                <h3 className="font-medium leading-tight text-2xl md:text-3xl text-gray-700">
                                    {'Looking for henna?'}
                                </h3>
                                <h2 className="font-light text-2xl text-gray-700">
                                    {'~ get in touch ~'}
                                </h2>
                                <div className="my-10">
                                    <Image
                                        src="/images/logo.png"
                                        width={110}
                                        alt="Fatima henna"
                                        height={110}
                                    />
                                    <div className={`${MyStyles.logo__title} text-gray-800 text-5xl my-4`}>
                                        {'alattehenna'}
                                    </div>
                                    <div>
                                        <span className="text-gray-400 font-light">Alattehenna an app for <span className="text-sky-600 font-small">booking</span> henna and <span className="text-emerald-600 font-small">managing</span> clients.</span>
                                    </div>
                                </div>

                                <div>
                                    <Link href="../api/auth/login">
                                        <button type="button" className="bg-sky-400 text-white rounded-full font-medium py-2.5 w-full hover:bg-sky-500 hover:shadow-lg">
                                            LOGIN
                                        </button>
                                    </Link>
                                </div>
                                <div className="mt-1">
                                    <span className="text-gray-400">Follow us on Instagram! </span>
                                </div>
                                <div>
                                    <Link href="https://www.instagram.com/alattehenna/">
                                        <a className="text-xl text-sky-400" target="_blank" alt="Instagram">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isLoading && user && (
                <div>
                    <div>
                        Welcome home {user.name}
                        <Text
                            css={{
                                color: '$blue800',
                                fontSize: '$tiny',
                                padding: '$2 $4'
                            }}
                        >
                            Using tokens
                        </Text>
                    </div>
                    <div>

                    </div>
                    <div className={`bg-white absolute bottom-0 left-0 md:top-0 md:left-0 md:w-16 md:h-screen w-full h-16 flex md:justify-center justify-end item-center  shadow-lg`}>
                        <div className={`${MyStyles.logo__title} md:hidden text-3xl absolute left-10 bottom-3`}>
                            alattehenna
                        </div>
                        <div className="absolute bottom-3 text-2xl right-6 md:right-auto rounded-full flex items-center">
                            <div className="hidden">
                                <Image
                                    className="rounded-full"
                                    src={user.picture}
                                    alt={'lama'}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <Popover placement="top-left">

                                <Popover.Trigger>
                                    <button className={`${MyStyles.settings} rounded-full text-md flex item-center text-gray-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} className="shadow-lg md:rotate-90 py-2 px-4 rounded-full" />
                                    </button>
                                </Popover.Trigger>

                                <Popover.Content css={{ bgColor: '#111111', color: 'white', padding: '$10', width: '20em' }}>
                                    <div className={`${MyStyles.logo__title} text-white text-4xl text-center p-2`}>
                                        {'alattehenna'}
                                    </div>
                                    <div className="flex justify-center my-2">
                                        <Image
                                            className="rounded-full"
                                            src={user.picture}
                                            alt={'lama'}
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="my-5 text-center text-gray-300">
                                        <div className="inline-block text-left">
                                            <div>
                                                <span>{emailRegex.test(user.name)?'':user.name}</span>
                                            </div>
                                            <div>
                                                <span className="text-md">{user.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2 flex justify-center">
                                        <div className="w-full">
                                            <Link href="/api/auth/logout">
                                                <Button css={{ width: 'stretch' }} size={'lg'} color={'gradient'}>
                                                    {'Log out'}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Popover.Content>
                            </Popover>
                        </div>

                    </div>
                </div>
            )
            }
        </div >
    )
}
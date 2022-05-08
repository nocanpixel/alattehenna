//AUTH0
import { useUser } from '@auth0/nextjs-auth0';

//STYLES
import MyStyles from "../styles/MyStyles.module.css";
import { Button, useTheme, Text, Tooltip, Popover } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

//SELECTORS
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
    const { user } = useUser();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user) {
        const USER_ROLE = user[process.env.NEXT_PUBLIC_NAMESPACE_USER_APP_DATA].roles[0];
        return (
            <div className={`bg:white md:bg-gray-50 shadow-[0_5px_35px_-15px_rgba(0,0,0,0.3)]  absolute bottom-0 left-0 md:top-0 md:left-0 md:w-16 md:h-screen w-full h-16 flex md:justify-center justify-end item-center`}>
                <div className={`${MyStyles.logo__title__navbar} md:hidden text-3xl absolute left-10 bottom-3`}>
                    alattehenna
                </div>
                <div className="absolute bottom-3 text-2xl right-6 md:right-auto rounded-full flex items-center">
                    <Popover placement="">
                        {/* Button menu trigger */}
                        <Popover.Trigger>
                            <button className={`${MyStyles.settings} rounded-full text-md shadow-md flex item-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className="md:rotate-90 py-2 px-4 rounded-full" />
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
                                <div>
                                    {'Welcome back !'}
                                </div>
                                {USER_ROLE == 'admin' && (
                                    <Text weight="bold" css={{ margin: '$0', textGradient: "45deg, $yellow500 -20%, $red500 100%", }}>
                                        {`Role: ${USER_ROLE}`}
                                    </Text>
                                )}
                                <div className="inline-block text-left">
                                    <div>
                                        <span>{emailRegex.test(user.name) ? '' : user.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-md">{user.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link href="/">
                                    <a>
                                        <div className='p-2 text-white text-center hover:bg-gray-800 rounded-md transition ease-in-out delay-50 duration-300'>
                                            Home
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            {USER_ROLE == 'admin' && (
                                <Link href="/admin">
                                    <a>
                                        <div className='my-2 p-2 text-white text-center hover:bg-gray-800 rounded-md transition ease-in-out delay-50 duration-300'>
                                            Dashboard
                                        </div>
                                    </a>
                                </Link>
                            )}
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
        )
    }
}
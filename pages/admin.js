import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../components/loading';

import { useRouter } from 'next/router';
import { Grid, Text } from '@nextui-org/react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import MyStyles from '../styles/MyStyles.module.css';

import { format, compareAsc } from 'date-fns';


function Admin() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const USER_ROLE = user[process.env.NEXT_PUBLIC_NAMESPACE_USER_APP_DATA].roles[0]

    if (USER_ROLE != 'admin') {
        router.push('/');
    } else {
        return (
            <div className='w-11/12 md:w-9/12 lg:w-6/12 m-auto'>
                <div className='h-auto mb-28 bg-red-600'>
                    
                </div>
                <div>
                    <Navbar user={user} isLoading={isLoading} />
                </div>
            </div>
        )
    }
}

export default withPageAuthRequired(Admin, {
    onRedirecting: () => <Loading />,
    onError: error => console.log(error)
});
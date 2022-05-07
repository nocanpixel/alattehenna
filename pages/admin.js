import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from "next/link";
import userServices from './services/user';
import { useEffect, useState } from 'react';
import Loading from '../components/loading';

import { useRouter } from 'next/router';

function Admin() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const USER_ROLE = user[process.env.NEXT_PUBLIC_NAMESPACE_USER_APP_DATA].roles[0]

    if (USER_ROLE != 'admin') {
        router.push('/');
    } else {
        return (
            <div>
                Soy {USER_ROLE}
            </div>
        )
    }
}

export default withPageAuthRequired(Admin, {
    onRedirecting: () => <Loading />,
    onError: error => console.log(error)
});
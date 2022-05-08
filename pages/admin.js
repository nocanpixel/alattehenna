import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../components/loading';

import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

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
                <Navbar user={user} isLoading={isLoading} />
            </div>
        )
    }
}

export default withPageAuthRequired(Admin, {
    onRedirecting: () => <Loading />,
    onError: error => console.log(error)
});
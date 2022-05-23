// Auth
import { useUser } from '@auth0/nextjs-auth0';
import Loading from "../components/loading";

// Components
import Login from "../components/login";
import Home from "../components/home";
import Navbar from '../components/navbar';
import MyStyles from '../styles/MyStyles.module.css'

export default function App() {
    const { user, isLoading } = useUser();

    return (
        <div>
            {isLoading && (<Loading />)}
            {!isLoading && !user && (
                <div className="h-screen flex justify-center items-center">
                    <div className='w-12/12 md:w-1/2'>
                        <Login />
                    </div>
                </div>
            )}
            {!isLoading && user && (
                <>
                    <Home />
                </>

            )
            }
        </div >
    )
}
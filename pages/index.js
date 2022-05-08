// Auth
import { useUser } from '@auth0/nextjs-auth0';
import Loading from "../components/loading";

// Components
import Login from "../components/login";
import Home from "../components/home";
import Navbar from '../components/navbar';

export default function App() {
    const { user, isLoading } = useUser();

    return (
        <div className="md:w-1/2">
            {isLoading && (<Loading />)}
            {!isLoading && !user && (
                <Login/>
            )}
            {!isLoading && user && (
                <>
                <Home/>
                </>
                
            )
            }
        </div >
    )
}
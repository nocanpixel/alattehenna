import MyStyles from "../styles/MyStyles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

export default function Login() {
    return (
        <div className="container md:bg-white flex justify-center items-center">
            <div className="w-full rounded-md p-4 flex justify-center items-center">
                <div className="container flex justify-center items-center">
                    <div className="text-center py-2 my-2 md:my-10 md:w-11/12 lg:w-6/12">
                        <h3 className="font-medium leading-tight text-2xl md:text-3xl text-gray-700">
                            {'Looking for henna?'}
                        </h3>
                        <h2 className="font-light text-2xl text-gray-700">
                            {'~ get in touch ~'}
                        </h2>
                        <div className="my-10">
                            <Image
                                src="/images/logo2.png"
                                width={150}
                                height={150}
                                alt="Fatima henna"
                            />
                            <div className={`${MyStyles.logo__title} text-gray-800 text-5xl my-4`}>
                                {'alattehenna'}
                            </div>
                        </div>
                        <div className="my-4">
                            <span className="text-gray-400 font-light">Alattehenna an app for <span className="text-sky-600 font-small">booking</span> henna and <span className="text-emerald-600 font-small">managing</span> clients.</span>
                        </div>
                        <div>
                            <Link href="../api/auth/login">
                                <button type="button" className="bg-sky-400 text-white rounded-full font-medium py-2.5 w-full transition delay-100 duration-300 hover:bg-sky-500 hover:shadow-lg">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                        <div className="mt-1">
                            <span className="text-gray-400">Follow us on Instagram! </span>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/alattehenna/">
                                <a className={`text-xl text-gray-400 transition delay-100 hover:text-sky-600 duration-300`} target="_blank" alt="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
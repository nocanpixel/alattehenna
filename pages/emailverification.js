import MyStyles from "../styles/MyStyles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function emailverification() {

    return (
        <div className="container flex justify-center items-center">
            <div className="w-11/12 p-10 bg-white shadow-lg rounded-lg flex justify-center items-center">
                <div className="container">
                    <div className="text-center py-2 my-2">
                        <h3 className="font-medium leading-tight text-3xl text-gray-700">
                            {'Please verify your email before logging in.'}
                        </h3>

                        <div className="my-10">
                            <Image
                                src="/images/logo.png"
                                width={150}
                                alt="Fatima henna"
                                height={150}
                            />
                            <div className={`${MyStyles.logo__title} text-gray-800 `}>
                                {'alattehenna'}
                            </div>
                            <div>
                                <span className="text-gray-400">Alattehenna an app for <span className="text-sky-600 font-small">booking</span> henna and <span className="text-emerald-600 font-small">managing</span> clients.</span>
                            </div>
                        </div>
                        <div>
                            <Link href="../api/auth/login">
                                <button type="button" className="bg-sky-400 text-white rounded-full font-medium py-2.5 w-full hover:bg-sky-500 hover:shadow-lg">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                        <div className="mt-3">
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
    )
}
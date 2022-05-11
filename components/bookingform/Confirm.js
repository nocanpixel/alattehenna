import { Button, Progress } from "@nextui-org/react";
import MyStyles from '../../styles/MyStyles.module.css';
import { Text } from "@nextui-org/react";
export default function Confirm({ prevStep, handleSubmit }) {
    const onSubmit = data => {
        const bookData = {
            name: data.name,
            phone: data.phone,
            adress: [data.location, data.city, data.postCode]
        }
        console.log(bookData);
    };
    return (
        <div className="flex justify-center items-center mt-4 relative">
            <div className={`w-full`}>
                <div className={`${MyStyles.container__form} my-2`}>
                    <div className="">
                        <Text size={30} h2>Welcome to our booking system</Text>
                    </div>
                    <div className="mt-4">
                        <Text size={17}>This is a hassle-free of booking your henna appointment with me! Fill out the following questionnaire so I can know more about your booking.</Text>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={() => prevStep()} className="bg-black rounded-full px-11 py-2 mt-4 text-white text-xl">Prev</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
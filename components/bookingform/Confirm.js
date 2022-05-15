import { Button, Progress } from "@nextui-org/react";
import MyStyles from '../../styles/MyStyles.module.css';
import { Text } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import React, { useEffect, useState } from "react";
import { myServices } from "../../utils/services";

export default function Confirm({ prevStep }) {
    const { handleSubmit } = useForm();
    const { state, actions } = useStateMachine();
    const [receipt, setReceipt] = useState();

    useEffect(() => {
        const totalService = [];
        myServices.forEach((ele) => {
            state.services.forEach((ser) => {
                if (ele.name === ser) {
                    totalService.push([ele.name, ele.desc, ele.price]);
                }
            })
        })

        const initialValue = 0;
        const total = totalService.reduce((previosValue, currentValue) => previosValue + currentValue[2], initialValue);

        setReceipt({
            services: totalService,
            total: total,
        })

    }, [state])

    const onSubmit = () => {
        const myArr = [state.adress || state.location, state.city, state.postCode];
        const dataFilter = myArr.filter((el) => el !== undefined);
        const bookData = {
            name: state.name,
            phone: state.phone,
            date: state.date,
            adress: dataFilter,
            services: state.services,
            total: receipt.total,
        }
        console.log(receipt);
    };

    return (
        <div className="flex justify-center items-center mt-4 relative">
            <div className={`w-full`}>
                <div className={`${MyStyles.container__form} my-2`}>
                    <div className="">
                        <Text size={30} h2>Finally!</Text>
                    </div>
                    <div className="mt-4">
                        <Text size={17}>This is your receipt.</Text>
                    </div>

                    {receipt && (
                        <>
                            {receipt.services.map((ele, index) => (
                                <div key={index} className="container my-4 flex justify-between items-center">
                                    <div>
                                        <div>
                                            {ele[0]}
                                        </div>
                                        <div>
                                            {ele[1]}
                                        </div>
                                    </div>
                                    <div>{ele[2]}</div>
                                </div>
                            ))}
                            <div className="flex justify-end items-center">
                                <div>
                                    {receipt.total}
                                </div>
                            </div>
                        </>
                    )}
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
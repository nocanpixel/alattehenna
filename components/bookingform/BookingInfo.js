import { Button, Checkbox, Collapse, Text, Radio,Modal,useModal } from "@nextui-org/react";
import MyStyles from '../../styles/MyStyles.module.css';
import { useStateMachine } from 'little-state-machine';

import { Controller, useForm } from "react-hook-form";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { updateActions } from "./actions";

import Image from "next/image";
import { bridalPackage, handsPackage, myPackages, legsPackage, bodyPackage } from "../../utils/services";
import ModalBooking from "./ModalBooking";

export default function BookingInfo({ prevStep, nextStep, step }) {
    const { state, actions } = useStateMachine({ updateActions });
    const { setVisible, bindings } = useModal();
    const [ modalData, setModalData ] = useState([]);
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            date: new Date(),
            amountHours: 1,
            bridalPackage: [],
            handsPackage: [],
            legsPackage: [],
            bodyPackage: [],

        }
    });
    const [checkBox, setCheckBox] = useState(true);
    const [isCheckedEvent, setIsCheckedEvent] = useState(false);

    const onSubmit = (data) => {
        /*         actions.updateActions({
                    date: data.date.toString(),
                    event: data.amountHours,
                    services: data.bridalPackage.concat(data.handsPackage,data.legsPackage,data.bodyPackage),
                }); */
        //nextStep()
        console.log(data)
    }
    const watchCheckbox = (e) => {
        if (document.querySelector(':checked')) {
            setCheckBox(false)
        } else {
            setCheckBox(true)
        }
    }

    return (
        <div className="flex justify-center items-center mt-4 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`w-full`}>
                    <div className={`${MyStyles.container__form} mt-2 `}>
                        <div className="">
                            <Text size={30} h2>Choose your Henna package</Text>
                        </div>
                        <div className="my-2">
                            <Text size={18}>This is a hassle-free of booking your henna appointment with me! Fill out the following questionnaire so I can know more about your booking.</Text>
                        </div>
                        {myPackages.map((item,index) => (
                            <div onClick={()=> { setVisible(true); setModalData(item)} } key={index} className="my-8 grid grid-cols-1 gap-2 cursor-pointer hover:scale-105 transition ease-in-out delay-50 duration-300">
                                <div className="bg-white hover:shadow-md grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                                    <div className="ml-4 my-7">
                                        <div>
                                            <Text h1>{item.name}</Text>
                                        </div>
                                        <div>
                                            <Text size={20}>{item.desc}</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ModalBooking bindings={bindings} modalData={modalData} setVisible={setVisible} />
                    <div className="flex justify-end gap-4 mb-20">
                        <button onClick={() => prevStep()} className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Prev</button>
                        <button disabled={checkBox} type="submit" className={`${checkBox ? 'bg-black opacity-40' : 'bg-black'} rounded-full px-8 py-2 mt-4 text-white text-xl`}>Next</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
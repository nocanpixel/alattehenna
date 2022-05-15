import { Button, Progress } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import MyStyles from '../../styles/MyStyles.module.css';

import { Checkbox, FormControl, Radio, RadioGroup, MenuItem, InputLabel, Select, TextField, SelectChangeEvent, FormControlLabel } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useStateMachine } from "little-state-machine";

import { useForm } from "react-hook-form";

import { updateActions, clearActions } from "./actions";
export default function UserDetails({
    nextStep,
    prevStep,
    step,
    isCheckedDelivery,
    setIsCheckedDelivery,
    inputLocation,
    setInputLocation,
}) {
    const { state, actions } = useStateMachine({ updateActions, clearActions });
    const { register, watch, unregister, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: state.name,
            phone: state.phone,
            location: state.location,
            address: state.address,
            postCode: state.postCode,
            city: state.city
        }
    });

    const onSubmit = (data) => {
        actions.clearActions(data);
        actions.updateActions(data);
        nextStep();
    }

    const watchOption = (e) => {

        if (e.target.value == 'Your location') {
            setInputLocation(e.target.value);
            setIsCheckedDelivery(true);
            unregister('location');
        } else if (e.target.value == 'London (Kilburn)') {
            setInputLocation(e.target.value);
            setIsCheckedDelivery(false)
            unregister('address')
            unregister('city')
            unregister('postCode')
        }
    }

    return (
        <div className="flex justify-center items-center mt-4 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`w-full pb-10`}>
                    <div className={`${MyStyles.container__form} my-2`}>
                        <div className="">
                            <Text size={30} h2>Just some information about you</Text>
                        </div>
                        <div className="mt-4">
                            <Text size={17}>This is a hassle-free way of booking your henna appointment with me! Fill out the following questionnaire so I can know more about your booking.</Text>
                        </div>
                        {/* FORM :D */}
                        <div className="my-4 flex flex-col gap-10">
                            <div>
                                <TextField error={errors.name && true} helperText={errors.name && 'This field is required'} {...register("name", { required: true })} type={'text'} color="secondary" fullWidth id="standard-basic" label="Full name" variant="standard" />
                            </div>
                            <div>
                                <TextField error={errors.phone && true} helperText={errors.phone && 'This field is required'} {...register("phone", { required: true })} type={'tel'} color="secondary" fullWidth id="standard-basic" label="Phone number" variant="standard" />
                            </div>
                            <div>
                                <Text weight={'bold'}>{'Choose an option ( ! ) '}</Text>
                                <RadioGroup row name="use-radio-group" onChange={(e) => watchOption(e)} value={inputLocation} >
                                    <FormControlLabel value={"Your location"} label="Your location" control={<Radio />} />
                                    <FormControlLabel value={"London (Kilburn)"} {...register('location', { required: false })} label="Our base in London (Kilburn)" control={<Radio />} />
                                </RadioGroup>
                                {isCheckedDelivery && (
                                    <div>
                                        <TextField type={'text'} {...register("address", { required: true })} color="secondary" fullWidth id="standard-basic" label="Address" variant="standard" />
                                    </div>

                                )}
                            </div>
                            {isCheckedDelivery && (
                                <>
                                    <div>
                                        <TextField error={errors.postCode && true} helperText={errors.postCode && 'This field is required'} {...register("postCode", { required: true })} color="secondary" fullWidth id="standard-basic" label="Post code" variant="standard" />
                                    </div>
                                    <div>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="City"
                                                defaultValue={state.city||''}
                                                {...register("city", { required: true })}
                                            >
                                                <MenuItem disabled={true} value={''}><em>Default value</em></MenuItem>
                                                <MenuItem value={'London'}>London</MenuItem>
                                                <MenuItem value={'Manchester'}>Manchester</MenuItem>
                                                <MenuItem value={'Birmingham'}>Birmingham</MenuItem>
                                                <MenuItem value={'Leicester'}>Leicester</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mb-20">
                        <button onClick={() => prevStep()} className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Prev</button>
                        <button disabled={!isValid&&true} type="submit" className={`${!isValid?'bg-black opacity-40':'bg-black'} rounded-full px-8 py-2 mt-4 text-white text-xl`}>Next</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
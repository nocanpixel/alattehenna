import { Button, Progress } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import MyStyles from '../../styles/MyStyles.module.css';

import { Checkbox, FormControl, Radio, RadioGroup, MenuItem, InputLabel, Select, TextField, SelectChangeEvent, FormControlLabel } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function UserDetails({ nextStep, prevStep, step, register, watch, errors, unregister }) {
    const [isCheckedDelivery, SetIsCheckedDelivery] = useState(true);

    const watchOption = (event) => {
        if (event.target.value === 'delivery') {
            SetIsCheckedDelivery(true);
            unregister('location');
            console.log(event.target.value);
        } else {
            SetIsCheckedDelivery(false);
            unregister('location');
            console.log(event.target.value);
        }
    }

    const checkErrors = Object.keys(errors).length;
    return (
        <div className="flex justify-center items-center mt-4 relative">
            <div className={`w-full mb-20`}>
                <div className={`${MyStyles.container__form} my-2`}>
                    <div className="">
                        <Text size={30} h2>Just some information about you</Text>
                    </div>
                    <div className="mt-4">
                        <Text size={17}>This is a hassle-free of booking your henna appointment with me! Fill out the following questionnaire so I can know more about your booking.</Text>
                    </div>
                    {/* FORM :D */}
                    <div className="my-4 flex flex-col gap-10">
                        <div>
                            <TextField error={errors.name && true} helperText={errors.name && 'This field is required'} {...register("name", { required: true })} type={'text'} color="secondary" fullWidth id="standard-basic" label="Name" variant="standard" />
                        </div>
                        <div>
                            <TextField error={errors.phone && true} helperText={errors.phone && 'This field is required'} {...register("phone", { required: true })} type={'tel'} color="secondary" fullWidth id="standard-basic" label="Phone number" variant="standard" />
                        </div>
                        <div>
                            <Text weight={'bold'}>{'Choose an option delivery by default ( ! ) '}</Text>
                            <RadioGroup onChange={watchOption} row name="use-radio-group" defaultValue={"delivery"} >
                                <FormControlLabel value={"delivery"} label="Delivery" control={<Radio />} />
                                <FormControlLabel value={"hall"} {...register('location')} label="In hall" control={<Radio />} />
                            </RadioGroup>
                            {isCheckedDelivery?(
                                <div>
                                    <TextField type={'text'} {...register("location")} color="secondary" fullWidth id="standard-basic" label="Adress" variant="standard" />
                                </div>
                            ):(
                                <div hidden={true}>
                                    <Radio value={'hall'} />
                                </div>
                            )}
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="City"
                                    defaultValue={'London'}
                                    {...register("city")}
                                >
                                    <MenuItem value={'London'}>London</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField error={errors.postCode && true} helperText={errors.postCode && 'This field is required'} {...register("postCode", { required: true })} color="secondary" fullWidth id="standard-basic" label="Post code" variant="standard" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <button onClick={() => prevStep()} className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Prev</button>
                    <button disabled={checkErrors > 0 && true} onClick={() => nextStep()} className={`${checkErrors > 0 ? 'bg-gray-200' : 'bg-black'} rounded-full px-8 py-2 mt-4 text-white text-xl transition delay-75 duration-300`}>Next</button>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import BookingInfo from "./BookingInfo";
import Confirm from "./Confirm";
import Presentation from "./Presentation";
import UserDetails from "./UserDetails";
import { useForm } from "react-hook-form";

export default function BookingForm({ step, setStep }) {

    const { register, watch, unregister, handleSubmit, formState: { errors } } = useForm();

    const [values , setValues] = useState();

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    switch (step) {
        case 1:
            return (
                <Presentation nextStep={nextStep} step={step} />
            )
        case 2:
            return (
                <UserDetails unregister={unregister} values={values} setValues={setValues} nextStep={nextStep} register={register} watch={watch} errors={errors} prevStep={prevStep} step={step} />
            )
        case 3:
            return (
                <BookingInfo nextStep={nextStep} prevStep={prevStep} step={step} />
            )
        case 4:
            return (
                <Confirm prevStep={prevStep} handleSubmit={handleSubmit} step={step} />
            )
        default:
            setStep(1);
    }
}
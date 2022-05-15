import { useState } from "react";
import BookingInfo from "./BookingInfo";
import Confirm from "./Confirm";
import Presentation from "./Presentation";
import UserDetails from "./UserDetails";

export default function BookingForm({ step, setStep }) {

    const [values , setValues] = useState();

    const [inputLocation, setInputLocation] = useState('London (Kilburn)');

    const [isCheckedDelivery, setIsCheckedDelivery] = useState(false);

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
                <UserDetails  isCheckedDelivery={isCheckedDelivery} setIsCheckedDelivery={setIsCheckedDelivery} inputLocation={inputLocation} setInputLocation={setInputLocation} values={values} setValues={setValues} nextStep={nextStep} prevStep={prevStep} step={step} />
            )
        case 3:
            return (
                <BookingInfo nextStep={nextStep} prevStep={prevStep} step={step} />
            )
        case 4:
            return (
                <Confirm prevStep={prevStep} step={step} />
            )
        default:
            setStep(1);
    }
}
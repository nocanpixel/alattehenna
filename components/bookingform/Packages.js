import { Button, Checkbox, Collapse, Text, Radio, Image, Modal, useModal } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export function BridalPackage({justifyContent}) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className={`${justifyContent}`}>
           Bridal package
        </div>
    )
}

export function HandsPackage({justifyContent}) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className={`${justifyContent}`}>
            Hands package
        </div>
    )
}

export function LegsPackage({justifyContent}) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className={`${justifyContent}`}>
            Legs package
        </div>
    )
}

export function BodyPackage({justifyContent}) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className={`${justifyContent}`}>
            Body package
        </div>
    )
}

export function Events({justifyContent}) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <div className={`${justifyContent}`}>
            Events package
        </div>
    )
}
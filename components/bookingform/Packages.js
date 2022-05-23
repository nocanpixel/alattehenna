import { Button, Checkbox, Collapse, Text, Radio, Image, Modal, useModal } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { bridalPackage, wristPackage } from "../../utils/services";
import { handsPackage } from "../../utils/services";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { updateActions } from "./actions";
import { useStateMachine } from "little-state-machine";
import { Autocomplete, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { emptyObject } from "../../utils/emptyObject";
export function BridalPackage({ setBookingData, justifyContent, setVisible }) {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        const dataForm = {
            bridalPackage: JSON.parse(Object.values(data)),
        }
        setBookingData(dataForm)
        //actions.updateActions(dataForm);
        setVisible(false)
    }

    return (
        <div className={`${justifyContent}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <Controller
                        control={control}
                        name="bridalPackage"
                        rules={{ required: true}}
                        render={({ field }) => (
                            <Radio.Group {...field} >
                                {bridalPackage.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <div>
                                            <Radio value={`{"name":"${item.name}","price":"${item.price}"}`} >
                                                <div>
                                                    <div>
                                                        {item.name}
                                                        <Text >{item.desc}</Text>
                                                    </div>
                                                </div>
                                            </Radio>
                                        </div>
                                        <div>
                                            <Text h3>{currencyFormatter(item.price)}</Text>
                                        </div>
                                    </div>
                                ))}
                            </Radio.Group>
                        )}
                    />
                    {errors.bridalPackage && <div className="w-full bg-red-600 mt-4 py-2 text-center"><span className="ml-7 text-white">We need an option first</span></div>}
                </div>
                <div className="mt-10 flex justify-end">
                    <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Save</button>
                </div>
            </form>
        </div>
    )
}

export function HandsPackage({ justifyContent }) {
    const { register, unregister, setValue, handleSubmit, watch, control, clearErrors, formState: { errors } } = useForm({
        defaultValues: {
            length: '',
            side: '',
            color: '',
            palm: '',
        }
    });
    const [imagePreview, setImagePreview] = useState(false);
    const [modalImages, setModalImages] = useState([]);

    //Checked inputs
    const [inputChecked, setInputChecked] = useState({})
    const [sideChecked, setSideChecked] = useState({})
    const [colorChecked, setColorChecked] = useState({})

    const handleImagePreview = () => {
        setImagePreview(!imagePreview);
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    //Modal for images
    const ImgPreviewModal = ({ modalImages }) => {
        return (
            <div>
                <Modal
                    closeButton
                    blur
                    aria-labelledby="modal-title"
                    open={imagePreview}
                    onClose={handleImagePreview}
                >
                    <Modal.Body>
                        <Image
                            showSkeleton
                            width={520}
                            height={380}
                            maxDelay={5000}
                            src={modalImages}
                            alt="Default Image"
                        />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

    return (
        <div className={`${justifyContent}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Collapse.Group shadow>
                        <Collapse title={`Length ${errors.length?' - (We need you to pick one in this list) ':''}`} subtitle={`Prices may vary depending on intricacy and detail.`}>
                            <Controller
                                control={control}
                                name="length"
                                rules={{required:true}}
                                render={({ field: { onChange } }) => (
                                    <Checkbox.Group
                                        color="gradient"
                                        label="Select length"
                                        onChange={(e)=> {onChange(e);setInputChecked(e.join(''))}}
                                    >
                                        {handsPackage.map((ele,index) => (
                                            <div key={index}>
                                                {ele.armParts.slice(0).reverse().map((item, index) => (
                                                    <div key={index}>
                                                        <div className="flex justify-between items-center py-2">
                                                            <div>
                                                                <Checkbox key={index} value={item.name} isDisabled={inputChecked&&!emptyObject(inputChecked)&&item.name!==inputChecked} >{item.name}</Checkbox>
                                                            </div>
                                                            <div onClick={()=>{handleImagePreview(); setModalImages(item.image) }} >
                                                                Preview
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Checkbox.Group>
                                )}
                            />
                        </Collapse>
                        <Collapse title={`Side ${errors.side?' - (We need you to pick one in this list) ':''}`} subtitle="Prices may vary depending on intricacy and detail.">
                            <Controller
                                control={control}
                                name="side"
                                rules={{required:true}}
                                render={({ field: { onChange } }) => (
                                    <Checkbox.Group
                                        color="gradient"
                                        label="Select arm side"
                                        onChange={(e)=> {onChange(e) ; setSideChecked(e.join(''))}}      
                                    >
                                        {handsPackage.map((ele,index) => (
                                            <div key={index}>
                                                {ele.sides.map((item, index) => (
                                                    <div key={index} className={'flex justify-between items-center py-2'}>
                                                        <Checkbox key={index} isDisabled={sideChecked&&!emptyObject(sideChecked)&&item!==sideChecked} value={item}>{item}</Checkbox>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Checkbox.Group>
                                )}
                            />
                        </Collapse>
                        <Collapse title="Palm" subtitle="Prices may vary depending on intricacy and detail.">
                            <Controller
                                control={control}
                                name='palm'
                                render={({ field: { onChange } }) => (
                                    <Checkbox color={'gradient'} onChange={onChange} >With palms</Checkbox>
                                )}
                            />
                        </Collapse>
                        <Collapse title={`Color ${errors.color ?' - (We need you to pick one in this list) ':''}`} subtitle="Prices may vary depending on intricacy and detail.">
                            <Controller
                                control={control}
                                name='color'
                                rules={{required:true}}
                                render={({ field: { onChange } }) => (
                                    <Checkbox.Group
                                        color="gradient"
                                        label="Select prefered color"
                                        onChange={(e)=> {onChange(e); setColorChecked(e.join(''))}}
                                    >
                                        {handsPackage.map((ele,index) => (
                                            <div key={index}>
                                                {ele.colors.map((item, index) => (
                                                    <div key={index} className={'flex justify-between items-center py-2'}>
                                                        <Checkbox key={index} isDisabled={colorChecked&&!emptyObject(colorChecked)&&item!==colorChecked} value={item} >{item}</Checkbox>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </Checkbox.Group>
                                )}
                            />
                            
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div>
                    <ImgPreviewModal modalImages={modalImages} />
                </div>
                <div className="mt-10 flex justify-end">
                    <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Save</button>
                </div>
            </form>
        </div>
    )
}

export function LegsPackage({ justifyContent }) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = () => {
        console.log('Hands package submitted')
    }
    return (
        <div className={`${justifyContent}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                </div>
                <div className="mt-10 flex justify-end">
                    <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Save</button>
                </div>
            </form>
        </div>
    )
}

export function BodyPackage({ justifyContent }) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = () => {
        console.log('Hands package submitted')
    }
    return (
        <div className={`${justifyContent}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                </div>
                <div className="mt-10 flex justify-end">
                    <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Save</button>
                </div>
            </form>
        </div>
    )
}

export function Events({ justifyContent }) {
    const { register, unregister, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = () => {
        console.log('Hands package submitted')
    }
    return (
        <div className={`${justifyContent}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>

                </div>
                <div className="mt-10 flex justify-end">
                    <button type="submit" className="bg-black rounded-full px-8 py-2 mt-4 text-white text-xl">Save</button>
                </div>
            </form>
        </div>
    )
}
import { Text, Input } from "@nextui-org/react"
import Image from "next/image"
import { Slider } from "@mui/material"
import { handsPackage } from "../../utils/services"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

import { currencyFormatter } from "../../utils/currencyFormatter"

export default function HandsForm({ packages, register, watch, setValue }) {
    const [inputQuantity, setInputQuantity] = useState(1);

    const incrementValue = () => {
        if (inputQuantity >= 1 && inputQuantity < 10) {
            setInputQuantity(inputQuantity + 1)
            setValue('quantity', inputQuantity+1)
        }
        
    }

    const decrementValue = () => {
        if (inputQuantity > 1) {
            setInputQuantity(inputQuantity - 1)
            setValue('quantity', inputQuantity-1)
        }
    }

    const handleChange=(e)=>{
        setInputQuantity(e.target.value)
    }

    return (
        <>
            {packages && (
                <>
                    {handsPackage.map((ele, index) => (
                        <div key={index}>
                            {ele.name === packages && (
                                <div className="mt-10">
                                    <div>
                                        <Text h2>Package detail</Text>
                                        <Text css={{ marginTop: '-5px' }}>Remember , prices also vary depending on the intricacy of the design.</Text>
                                    </div>
                                    <div className="mt-4">
                                        <div>
                                            <Text h4>{ele.desc}</Text>
                                        </div>
                                        <div>
                                            <Image
                                                width={200}
                                                height={300}
                                                src={`${ele.img}`}
                                                alt="measure"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4 items-center ml-4">
                                                <div onClick={() => decrementValue()} className="bg-black text-white py-2 px-3 rounded-full">
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </div>
                                                <div className="text-2xl">
                                                    <input style={{ width: '1.5em', textAlign: 'center' }} type="text" value={inputQuantity} {...register('quantity')} onChange={(e)=> setInputQuantity(e.target.value)} />
                                                </div>
                                                <div onClick={incrementValue} className="bg-black text-white py-2 px-3 rounded-full">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </div>
                                            </div>
                                            <div>
                                                <Text css={{fontWeight:'bold'}} h3> £ {currencyFormatter(ele.price)}</Text>
                                                <input type="text" {...register('price')} hidden defaultValue={ele.price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </>
    )
}
import React from "react";
import { Card, CardBody,Image,Tooltip } from "@nextui-org/react";
import profpic from '../resources/profpic.png'
const TokenImage = (props) =>{
    return (
        <div >
            <Tooltip content={props.text}
                placement="bottom"
            >
            <Image 
                width={80}
                alt="token-image"
                src={props.src}
                className="border-2 rounded-full border-gray-600 p-2"
            />
           </Tooltip>
        
        </div>
    )
}

export const PersonalTokenCollage = () =>{
    return (
        <div className="flex justify-center my-4">
        <Card className="min-w-[700px] bg-zinc-800">
            <CardBody>
                <div className="h-80">
                    <TokenImage src={profpic} text="ethereum"/>
                </div>
            </CardBody>
        </Card>
    </div>
    )
}
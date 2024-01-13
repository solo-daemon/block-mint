import React from "react";
import { Card, CardBody,Image,Tooltip } from "@nextui-org/react";
import profpic from '../resources/profpic.png'
import cryptopunk from '../resources/cryptop-punk.avif'
import xcopy from '../resources/xcopy.webp'
import azuki from '../resources/azuki.avif'
import cryptokitty from '../resources/crypto-kitty.avif'
import moonbirds from '../resources/moon-birds.bin'
const TokenImage = (props) =>{
    return (
        <div className="p-4">
            <Tooltip content={props.text}
                placement="bottom"
            >
            <Image 
                width={80}
                alt="token-image"
                src={props.src}
                className="border-2 rounded-full border-zinc-200 p-2"
            />
           </Tooltip>
        
        </div>
    )
}

export const PersonalTokenCollage = () =>{
    return (
        <div className="flex justify-center m-4">
        <Card className="min-w-[700px] bg-neutral-600">
            <CardBody>
                <div className="h-80">
                    <div className="flex justify-center text-slate-100 text-2xl mb-4">
                        Your top 5 NFTs
                    </div>
                    <div className="flex justify-center">
                        <TokenImage src={moonbirds} text="moonbirds"/>
                        <TokenImage src={cryptopunk} text="crypto-punk"/>
                        <TokenImage src={xcopy} text="xcopy"/>
                    </div>
                    <div className="flex justify-center">
                        <TokenImage src={azuki} text="azuki"/>
                        <TokenImage src={cryptokitty} text="cryptokitty"/>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>
    )
}
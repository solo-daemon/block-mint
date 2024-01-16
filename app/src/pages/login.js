import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { loginWithMetaMask } from "../utils/login";
import { useWeb3Modal,useWeb3ModalAccount } from '@web3modal/ethers5/react'

export const Login = () =>{
    const { open } = useWeb3Modal()
    const handleLoginOpen = () =>{
        open({ view: 'All wallets' })
        // setTimeout(()=>{
        //     window.location.href='dashboard'
        // },3000)
     }
     const { address, chainId, isConnected } = useWeb3ModalAccount()
     
    useEffect(()=>{
        if(isConnected===true){
        sessionStorage.setItem('accountId',address)
        window.location.href = '/dashboard'
        }
    },[isConnected,address])
    return (
        <>  
            <div
                style={{
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    background: "lime",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="content">
                    <Button radius="full" color="danger" className="px-[200px] py-[30px] text-white shadow-lg text-2xl"
                        onClick={handleLoginOpen}
                    >
                        Login
                    </Button>
                </div>
                </div>

        </>
    )
}
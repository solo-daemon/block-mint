import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { loginWithMetaMask } from "../utils/login";
export const Login = () =>{
    useEffect(()=>{
        
    },[])
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
                        onClick={loginWithMetaMask}
                    >
                        Login
                    </Button>
                </div>
                </div>

        </>
    )
}
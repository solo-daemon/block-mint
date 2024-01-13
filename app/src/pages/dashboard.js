import React, { useEffect } from "react";
import { NavBar } from "../components/navbar";
import { PersonalWrapped } from "./personalWrapped";

export const Dashboard = () =>{
    const [accountId,setAccountId]=React.useState("")
    useEffect(()=>{
        const accountId = sessionStorage.getItem('accountId')
        setAccountId(accountId)
    },[])
    return (
        <>
            <NavBar />
            <PersonalWrapped />
        </>
    )
}
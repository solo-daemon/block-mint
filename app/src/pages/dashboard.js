import React, { useEffect } from "react";
import { NavBar } from "../components/navbar";
import { PersonalWrapped } from "./personalWrapped";
import { CommentWall } from "./commnetWall";

export const Dashboard = () =>{
    const [accountId,setAccountId]=React.useState("")
    useEffect(()=>{
        const accountId = sessionStorage.getItem('accountId')
        setAccountId(accountId)
    },[])
    const [page,setPage] = React.useState("personal")
    return (
        <>
            <NavBar setPage={setPage} page={page}/>
            {page==="personal" ?<PersonalWrapped /> :
                <CommentWall />
        }
        </>
    )
}
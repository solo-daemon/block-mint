import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Snippet } from "@nextui-org/react";
import profpic from '../resources/profpic.png'
export const NavBar = ()=>{
    const [accountId,setAccountId] = React.useState("")
    useEffect(()=>{
        const accountid = sessionStorage.getItem('accountId')
        setAccountId(accountid)
    },[])
    return (
        <Navbar className="bg-zinc-800 p-0">
            <NavbarBrand className="text-slate-100">
                    Blockify
                </NavbarBrand>
                <NavbarContent justify="end">
                <Dropdown placement="bottom-end">
                <DropdownTrigger>
                        <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="default"
                    name="Jason Hughes"
                    size="sm"
                    src={profpic}
                    />
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="accountid">
                        <Snippet size="sm" codeString={accountId}>{accountId.substring(0,10)+'...'}</Snippet>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
                </NavbarContent>
        </Navbar>
    )
}
import React, { useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Snippet, NavbarItem, Button,Tooltip } from "@nextui-org/react";
import { logout } from "../utils/logout";
import profpic from '../resources/profpic.png'
export const NavBar = (props)=>{
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
                <NavbarContent justify="center">
                    <NavbarItem>
                        {props.page==="personal"? <Button color="primary">Personal</Button> : <Button onClick={()=>{props.setPage('personal')}}>Personal</Button>}
                    </NavbarItem>
                    <NavbarItem>
                    {props.page==="wall"? <Button color="primary">Wall</Button> : <Button onClick={()=>{props.setPage('wall')}}>Wall</Button>}
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                <Tooltip>
                    <Button color="warning">MintBLKYToken</Button>
                </Tooltip>
                <Tooltip>
                    <Button color="danger">2023NFTs</Button>
                </Tooltip>
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
                    <DropdownItem key="logout" color="danger" onClick={logout}>logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
                </NavbarContent>
        </Navbar>
    )
}
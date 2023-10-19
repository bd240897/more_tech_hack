import * as React from 'react';

import {
    Box,
    Button,

} from '@mui/material';

import NoWallet from "./NoWallet/NoWallet"
import HaveWallet from "./HaveWallet/HaveWallet"
import {UserContext} from "@/context/WalletExists/WalletExists";
import {useContext} from "react";

export default function WalletPage() {

    const contex = useContext(UserContext);

    return (
        <>
            {/*<Box>*/}
            {/*    <Button*/}
            {/*        variant={"contained"}*/}
            {/*        onClick={()=>contex.setValue((prev: boolean)=>!prev)}*/}
            {/*        sx={{backgroundColor: "secondary.main"}}*/}
            {/*    >*/}
            {/*        Переключить*/}
            {/*    </Button>*/}
            {/*</Box>*/}


            {contex.value ? <HaveWallet/> : <NoWallet/>}
        </>
    );
}

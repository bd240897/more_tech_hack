import * as React from 'react';
//style
import styles from './ListPaymentsPage.module.sass';

import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Container,
    Stack,
    Link
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {services, servicesFromData} from "@/common/services";
import YourSvg from "./icon/no_wallet.svg";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import {Link as RouterLink} from "react-router-dom";
import NoWallet from "./NoWallet/NoWallet"
import HaveWallet from "./HaveWallet/HaveWallet"
import {UserContext} from "@/context/WalletExists/WalletExists";
import {useContext} from "react";

export default function Wallet() {
    // const [isWallet, setIsWallet] = React.useState(false);

    const contex = useContext(UserContext);

    return (
        <>
            <Box>
                <Button
                    variant={"contained"}
                    onClick={()=>contex.setValue((prev: boolean)=>!prev)}
                    sx={{backgroundColor: "secondary.main"}}
                >
                    Переключить
                </Button>
            </Box>


            {contex.value ? <HaveWallet/> : <NoWallet/>}
        </>
    );
}

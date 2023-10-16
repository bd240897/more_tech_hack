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
    Grid,
    Chip,
    IconButton
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {services, servicesFromData} from "@/common/services";
import YourSvg from "./icon/no_wallet.svg";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import NoWallet from "@/pages/TestPage/NoWallet/NoWallet";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrayBlock from "@/pages/TestPage/ArrayBlock/ArrayBlock";
import CreateWallet from "@/pages/TestPage/CreateWallet/CreateWallet";

export default function TestPage() {


    return (
        <>
            <Container sx={{height: "100%"}}>

                <ArrayBlock/>

                <NoWallet/>

                <CreateWallet/>

            </Container>
        </>
    );
}

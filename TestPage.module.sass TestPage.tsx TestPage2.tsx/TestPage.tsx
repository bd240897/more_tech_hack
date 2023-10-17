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


export default function TestPage() {


    return (
        <>
            <Container sx={{height: "100%"}}>

                {/*<ArrayBlock text={"Добавление лицевого счета"} link={"/"}/>*/}

                {/*<NoWallet/>*/}

                {/*<CreateWallet/>*/}

                {/*<ExamplePaper/>*/}

            </Container>
        </>
    );
}

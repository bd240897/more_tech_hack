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
    Stack
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {services, servicesFromData} from "@/common/services";
import YourSvg from "./icon/no_wallet.svg";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export default function NoWallet() {


    return (
        <>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{height: "100%"}}
            >

                <Box data-name="no_wallet" component={"div"}>
                    <Typography variant={"h3"} align={"center"} sx={{my: 4, p: 3, border: "2px solid black"}}>
                        Нет подключенных лицевых счетов
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"} sx={{border: "2px solid black"}}>
                    <Button variant={"contained"} sx={{p: 3}}>
                        Добавить лицевой счет
                    </Button>
                </Box>

                <Box sx={{border: "2px solid black"}}>
                    <Box display={"flex"} justifyContent={"center"} >
                        {/*<img src={YourSvg} alt="Your SVG"/>*/}
                        <PersonSearchIcon fontSize={"large"} style={{ color: "red", fontSize:  120}}/>
                    </Box>

                    <Typography variant={"body1"} align={"center"} sx={{my: 4, p: 3}}>
                        Часто задаваемые вопросы
                    </Typography>
                </Box>
            </Stack>
        </>
    );
}

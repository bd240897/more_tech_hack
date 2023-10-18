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
import no_wallet_2 from "@/assets/icon/no_wallet_2.png"


export default function Wallet() {


    return (
        <>
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{height: "100%"}}
            >

                <Box data-name="no_wallet" component={"div"} sx={{mb: 3}}>
                    <Typography variant={"h3"} align={"center"} sx={{my: 4, p: 3}}>
                        Нет подключенных лицевых счетов
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"}>
                    <Button variant={"contained"} sx={{p: 3}} component={RouterLink} to={"/wallet/create"}>
                        Добавить лицевой счет
                    </Button>
                </Box>

                <Box>

                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} sx={{mb: 3}}>
                        {/*<img src={YourSvg} alt="Your SVG"/>*/}
                        <Link component={RouterLink} to={"/wallet/example"}
                              sx={{textDecoration: "none", color: "black"}}>

                            <Box sx={{border: "4px solid black", p: 3}} borderRadius="50%">
                                {/*<PersonSearchIcon fontSize={"large"} style={{color: "red", fontSize: 140}}/>*/}
                                <Box component={"img"} src={no_wallet_2}></Box>
                            </Box>
                        </Link>
                    </Box>


                    <Typography variant={"h3"} align={"center"} sx={{my: 4, px: 5, py: 3}}>
                        Часто задаваемые вопросы
                    </Typography>
                </Box>

            </Stack>
        </>
    );
}

import * as React from 'react';
import {
    Box,
    Button,
    Typography,
    Stack,
    Link
} from '@mui/material';

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
                        <Link component={RouterLink} to={"/wallet/example"}
                              sx={{textDecoration: "none", color: "black"}}>
                            <Box sx={{border: "4px solid black", p: 3}} borderRadius="50%">
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

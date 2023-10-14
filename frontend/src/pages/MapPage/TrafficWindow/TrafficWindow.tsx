import React from 'react';

import {
    Box,
    Button,
    Typography,
    Stack,
    Grid,
    Paper
} from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface TrafficWindow{
    setIsTraffic: (value: (((prevState: boolean) => boolean) | boolean)) => void
}


const trafficColorsNormal = ["green", "green", "gray", "gray", "gray"]
const trafficColorsHard = ["yellow", "yellow", "yellow", "gray", "gray"]

const TrafficWindow = ({setIsTraffic}: TrafficWindow) => {
    // модалка открыта ли
    const [isButtonNow, setIsButtonNow] = React.useState(true);


    return (
        <Box sx={{my: 3}}>
            <Box sx={{mb: 2}}>
                <Typography variant={'h3'} align={"center"}>
                    Банк ВТБ
                </Typography>
                <Typography variant={'h6'} align={"center"}>
                    Пушкина улица, 8
                </Typography>
                <Typography variant={'subtitle2'} align={"center"}>
                    420111, Казань, Вахитовский район, 1 этаж
                </Typography>
            </Box>


            <Box sx={{backgroundColor: "#DCE0EB", borderRadius: "10px", p: 2, mb: 2}}>

                <Stack direction="row" justifyContent="space-between" sx={{mb: 2}} alignItems={"center"}>
                    <Typography sx={{fontSize: {xs: 12, sm: 15}}}>
                        Загруженность
                    </Typography>
                    <Button variant={"contained"}
                            sx={{fontSize: {xs: 10, sm: 15},
                            backgroundColor: "secondary.main"
                            }}
                            onClick={()=>setIsButtonNow(true)}
                            disabled={isButtonNow}
                    >
                        Сейчас
                    </Button>
                    <Button variant={"contained"}
                            sx={{fontSize: {xs: 10, sm: 15},
                            backgroundColor: "secondary.main"
                            }}
                            onClick={()=>setIsButtonNow(false)}
                            disabled={!isButtonNow}
                    >
                        Через час
                    </Button>
                </Stack>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Stack direction="row"
                           alignItems="center"
                           spacing={2}
                           sx={{mb: 2}}
                    >
                        {isButtonNow
                            ?
                            trafficColorsNormal.map((element)=>
                                <CircleIcon fontSize={"large"} style={{ color: element, fontSize: "40px"}}/>
                            )
                            :
                            trafficColorsHard.map((element)=>
                                <CircleIcon fontSize={"large"} style={{ color: element, fontSize: "40px"}}/>
                            )
                        }
                    </Stack>
                </Box>


                <Stack direction="row" justifyContent="space-between">
                    <Typography variant={"subtitle2"} color={"gray"}>
                        Свободно
                    </Typography>
                    <Typography variant={"subtitle2"} color={"gray"}>
                        Средняя загрузка
                    </Typography>
                    <Typography variant={"subtitle2"} color={"gray"}>
                        Загружено
                    </Typography>
                </Stack>
            </Box>

            <Box sx={{mb: 2}}>
                <Stack direction="row" alignItems="center" justifyContent="center" gap={3} sx={{mb: 2}}>
                    <Typography sx={{fontWeight: "bold"}}>
                        Режим работы
                    </Typography>
                    <Typography>
                        для физ.лиц и юр.лиц
                    </Typography>
                </Stack>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>Пн-Чт</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>9:00-18:00</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Пт</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>9:00-17:00</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Сб-Вс</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>Выходной</Item>
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{backgroundColor: "#DCE0EB", borderRadius: "10px",mb: 2, p: 2}}>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{px: 5}} gap={2}>
                    <PhoneEnabledIcon sx={{fontSize: "50px"}}/>
                    <Stack direction="column">
                        <Typography variant={"h5"} sx={{fontSize: {xs: 16, sm: 28}}}>
                            8-800-100-24-24
                        </Typography>
                        <Typography variant={"subtitle2"} sx={{fontSize: {xs: 12, sm: 20}}}>
                            единая справочная
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Button fullWidth
                    variant="contained"
                    id="basic-button"
                    onClick={()=>setIsTraffic(false)}
                    sx={{backgroundColor: "secondary.main"}}
            >
                Закрыть
            </Button>
        </Box>
    );
};

export default TrafficWindow;

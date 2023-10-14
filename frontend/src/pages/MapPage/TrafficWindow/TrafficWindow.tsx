import React from 'react';

import {
    Box,
    Drawer,
    List,
    ListItem,
    ToggleButton,
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

const TrafficWindow = () => {
    return (
        <div>
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
                    <Typography>
                        Загруженность
                    </Typography>
                    <Button variant={"contained"}>
                        Сейчас
                    </Button>
                    <Button variant={"contained"}>
                        Через час
                    </Button>
                </Stack>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Stack direction="row"
                           alignItems="center"
                           spacing={2}
                           sx={{mb: 2}}
                    >
                        <CircleIcon fontSize={"large"} style={{ color: 'green' }}/>
                        <CircleIcon fontSize={"large"} style={{ color: 'green' }}/>
                        <CircleIcon fontSize={"large"} style={{ color: 'gray' }}/>
                        <CircleIcon fontSize={"large"} style={{ color: 'gray' }}/>
                        <CircleIcon fontSize={"large"} style={{ color: 'gray' }}/>
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


            <Box sx={{backgroundColor: "#DCE0EB", borderRadius: "10px", p: 2}}>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{px: 5}} gap={2}>
                    <PhoneEnabledIcon sx={{fontSize: "50px"}}/>
                    <Stack direction="column">
                        <Typography variant={"h5"}>
                            8-800-100-24-24
                        </Typography>
                        <Typography variant={"subtitle2"}>
                            единая справочная
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
};

export default TrafficWindow;

import React from 'react';
import {useForm} from "react-hook-form";
import style from "./LoginPage.module.sass"
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "@/utils/yup";
import {useNavigate} from "react-router-dom";
import {TextField, Box, Button, Typography, Grid} from '@mui/material';

const styleCss = {
    buttonPrimary: {
        backgroundColor: '#0077FF',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fdff8f',
            color: '#3c52b2',
        },
    },
    buttonSecondary: {
        backgroundColor: '#009FE0',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fdff8f',
            color: '#3c52b2',
        },
    },
}


interface LoginPageProps{
    setTabRegister: () => void
}

const Login = ({setTabRegister}:LoginPageProps) => {

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        resolver: yupResolver(
            LoginSchema,
        ),
    })

    const navigate = useNavigate();

    console.log("errors", errors)

    const handleSubmitForm = (data: any) => {
        console.log("data", data)
        navigate('/')
    }

    /**
     * Сменить текущий там на регистер
     */
    const handleTabChangeToRegister = (e: any) => {
        e.preventDefault()
        setTabRegister()
    }

    return (
        <Box px={3} py={2}>

            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(handleSubmitForm)}
                mb={2}
            >

                <Typography variant="h6" align="center" margin="dense" sx={{mb: "10px"}}>
                    Авторизация
                </Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>

                        <TextField
                            id="standard-password-input"
                            label="Логин"
                            helperText="Введите Логин"
                            // defaultValue=""
                            variant="filled"
                            margin="dense"
                            error={!!errors.login}
                            fullWidth
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "white"
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                }
                            }}
                            {...register('login')}
                        />

                        <Typography color="white" variant="p">
                            {errors.login?.message}
                        </Typography>

                    </Grid>

                    <Grid item xs={12} sm={12} sx={{mb: "20px",}}>
                        <TextField
                            id="filled-helperText"
                            label="Пароль"
                            helperText="Введите Пароль"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            margin="dense"
                            error={!!errors.password}
                            fullWidth
                            sx={{
                                orderRadius: "10px",
                                backgroundColor: "white",
                            }}
                            InputProps={{
                                style: {
                                    borderRadius: "10px",
                                }
                            }}
                            {...register('password')}
                        />

                        <Typography variant="p" color="white">
                            {errors.password?.message}
                        </Typography>
                    </Grid>
                </Grid>


                <div>
                    <Button variant="contained"
                            fullWidth
                            type={"submit"}
                            sx={styleCss.buttonPrimary}
                    >
                        Войти
                    </Button>
                </div>

            </Box>

            <Typography variant={'h5'} align={"center"} sx={{mb: 2}}>или</Typography>

            <Button variant="contained"
                    fullWidth
                    sx={styleCss.buttonSecondary}
                    onClick={handleTabChangeToRegister}
            >
                Зарегистрироваться
            </Button>

        </Box>
    );
};


export default Login;

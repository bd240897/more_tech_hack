import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema, RegisterSchema} from "@/utils/yup";
import {useNavigate} from "react-router-dom";

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

interface RegisterPageProps{
    setTabLogin: () => void
}

const Register = ({setTabLogin}:RegisterPageProps) => {

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm({
        resolver: yupResolver(
            RegisterSchema,
        ),
    })

    /**
     * Сменить текущий там на логин
     */
    const handleTabChangeLogin = (e: any) => {
        e.preventDefault()
        setTabLogin()
    }

    const navigate = useNavigate();

    console.log("errors", errors)

    const handleSubmitForm = (data: any) => {
        console.log("data", data)
        navigate('/')
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
                    Регистрация
                </Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>

                        <TextField
                            id="standard-password-input"
                            label="Почта"
                            helperText="Введите почту"
                            variant="filled"
                            margin="dense"
                            error={!!errors.mail}
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
                            {...register('mail')}
                        />

                        <Typography color="white" variant="p">
                            {errors.mail?.message}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12}>

                        <TextField
                            id="filled-helperText"
                            label="Пароль"
                            helperText="Придумайте пароль"
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


                    <Grid item xs={12} sm={12} sx={{mb: "20px",}}>

                        <TextField
                            id="filled-helperText"
                            label="Пароль"
                            helperText="Придумайте пароль"
                            type="passwordAgain"
                            autoComplete="current-password"
                            variant="filled"
                            margin="dense"
                            error={!!errors.passwordAgain}
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
                            {...register('passwordAgain')}
                        />

                        <Typography variant="p" color="white">
                            {errors.passwordAgain?.message}
                        </Typography>
                    </Grid>
                </Grid>


                <div>
                    <Button variant="contained"
                            fullWidth
                            type={"submit"}
                            sx={styleCss.buttonPrimary}
                    >
                        Зарегистрироваться
                    </Button>
                </div>

            </Box>

            <Typography variant={'h5'} align={"center"} sx={{mb: 2}}>или</Typography>

            <Button variant="contained"
                    fullWidth
                    sx={styleCss.buttonSecondary}
                    onClick={handleTabChangeLogin}
            >
                Войти
            </Button>

        </Box>
    );
};

export default Register;

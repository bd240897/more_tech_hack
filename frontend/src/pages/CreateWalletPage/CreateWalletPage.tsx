import * as React from 'react';
import {useForm} from "react-hook-form";
import {
    Box,
    Button,
    Typography,
    Stack,
    TextField,
    Switch,
    MenuItem
} from '@mui/material';
import {useNavigate} from "react-router-dom";
import ArrayBlock from "@/components/pageUI/ArrayBlock/ArrayBlock";
import {UserContext} from "@/context/WalletExists/WalletExists";
import {useContext} from "react";
import {cheaf, company} from "@/common/services";



const CreateWalletPage = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm()

    const navigate = useNavigate();

    const contex = useContext(UserContext);

    const handleSubmitForm = (data: any) => {
        console.log("handleSubmitForm Register", data)
        contex.setValue(true)
        navigate('/wallet')
    }

    return (
        <div>

            <ArrayBlock text={"Добавить лицевой счет"} link={"/wallet"}/>

            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(handleSubmitForm)}
                mb={2}
                sx={{minWidth: 120}}
            >
                <TextField
                    select
                    fullWidth
                    label="Select"
                    defaultValue=''
                    inputProps={register('company', {
                        required: 'Please enter currency',
                    })}
                    error={Boolean(errors.company)}
                    helperText={errors.company?.message as string}
                    sx={{mb: 2}}
                >

                    {company.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


                <TextField
                    id="standard-password-input"
                    label="Статус отношения к ЛС"
                    helperText="Статус отношения к ЛС"
                    // defaultValue=""
                    variant={"outlined"}
                    margin="dense"
                    error={!!errors.status}
                    fullWidth
                    sx={{
                        mb: 2
                    }}
                    InputProps={{
                        style: {
                            borderRadius: "10px",
                        }
                    }}
                    {...register('status')}
                />

                <TextField
                    select
                    fullWidth
                    label="Select"
                    defaultValue=''
                    inputProps={register('cheaf', {
                        required: 'Please enter currency',
                    })}
                    error={Boolean(errors.cheaf)}
                    helperText={errors.cheaf?.message as string}
                    sx={{mb: 2}}
                >

                    {cheaf.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>


                <Typography sx={{mb: 2}}>
                    Привяжите к учетной записи в личном кабинете номер договра до технологического присоединения, если
                    Вами получен временный номер лицевого счета, для отслеживания состояния по Вашей заявке
                </Typography>

                <Stack direction={"row"} sx={{mb: 2}} justifyContent={"space-between"}>
                    <Typography>
                        Получать счета по email
                    </Typography>
                    <Switch
                            defaultChecked
                            {...register('isWallet')}
                    />
                </Stack>

                <Button variant={"contained"}
                        fullWidth
                        type={"submit"}
                        sx={{mb: 2}}
                >
                    Добавить лицевой счет
                </Button>

            </Box>
        </div>
    );
};

export default CreateWalletPage;

import * as yup from 'yup'
import {AppErrors} from "@/common/errors";

/**
 * (login)
 * Валидация для формы входа
 */
export const LoginSchema = yup.object().shape({
    login: yup.string()
        .required(AppErrors.RequiredField),
    password: yup.string()
        .required(AppErrors.RequiredField)
})

export const RegisterSchema = yup.object().shape({
    mail: yup.string()
        .required(AppErrors.RequiredField),
    password: yup.string()
        .required(AppErrors.RequiredField),
    passwordAgain: yup.string()
        .required(AppErrors.RequiredField),
})

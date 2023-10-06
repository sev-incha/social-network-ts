import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { Container } from "../../components/UI/Container/Container";
import "../LoginPage/LoginPage.scss";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { useAddUserMutation } from "../../store/api/authApi";

interface RegistrationForm {
  username: string
  userphone: string
  userpassword: string
  email: string
  city: string
}

const registrationFormSchema = yup.object({
  username: yup.string().required('Обязательное поле'),
  userphone: yup.string().required('Обязательное поле'),
  userpassword: yup.string().required('Обязательное поле'),
  email: yup.string().required('Обязательное поле'),
  city: yup.string().required('Обязательное поле')
})

export const RegistrationPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: '',
      userphone: '',
      userpassword: '',
      email: '',
      city: ''
    }
  })

  const [registerUser] = useAddUserMutation()

  const onRegistrationSubmit = (data: RegistrationForm) => {
    registerUser({
      email: data.email,
      name: data.username,
      phone_number: data.userphone,
      password: data.userpassword,
      user_city: data.city,
    })
  }

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller 
            name="email" 
            control={control} 
            render={({ field }) => 
              <AppInput 
                type="text" 
                inputPlaceholder="email"
                isError={errors.email ? true : false}
                errorText={errors.email?.message}
                {...field} 
              />
            }
          />
          <Controller 
            name="username" 
            control={control} 
            render={({ field }) => 
              <AppInput 
                type="text" 
                inputPlaceholder="Имя фамилия"
                isError={errors.username ? true : false}
                errorText={errors.username?.message}
                {...field} 
              />
            }
          />
          <Controller 
            name="userphone" 
            control={control} 
            render={({ field }) => 
              <AppInput 
                type="tel" 
                inputPlaceholder="Номер телефона" 
                isError={errors.userphone ? true : false}
                errorText={errors.userphone?.message}
                {...field} 
              />
            }
          />
          <Controller 
            name="city" 
            control={control} 
            render={({ field }) => 
              <AppInput 
                type="text" 
                inputPlaceholder="Город"
                isError={errors.city ? true : false}
                errorText={errors.city?.message}
                {...field} 
              />
            }
          />
          <Controller 
            name="userpassword" 
            control={control}
            render={({ field }) =>
              <AppInput 
                type="password" 
                inputPlaceholder="Пароль" 
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
                {...field} 
              />
            }
          />
          <AppButton 
            type="submit"
            isDisabled={!!Object.keys(errors).length} 
            buttonText="Зарегестрироваться" 
          />
        </form>
        <Link to="/forget-password">Забыли пароль?</Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};

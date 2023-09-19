import React from "react";
import { useForm, SubmitHandler, Controller  } from "react-hook-form";
import * as yup from 'yup'
import "./RegistrationPage.scss"
import { Container } from "../../components/UI/Header/Container/Container";
import { AppHeader } from "../../components/AppHeder/AppHeader";
import { AppInput } from "../../components/UI/Header/AppInput/AppInput";
import { RegistetionInfo } from "../../components/RegistrationInfo/RegistetionInfo";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { useAddUserMution } from "../../store/api/authApi";

interface RegistrationForm {
  username: string
  userphone: string
  userpassword: string
  email: string
  city: string
}

const registrationFormSchema =  yup.object({
  username: yup.string().required('Обезательное поле'),
  userphone: yup.string().required('Обезательное поле'),
  userpassword: yup.string().required('Обезательное поле'),
  email: yup.string().required('Обезательное поле'),
  city: yup.string().required('Обезательное поле')
})

export const RegistrationPage = () => {
  const {control, handleSubmit, formState: { errors }} = useForm <RegistrationForm> ({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: '',
      userphone: '',
      userpassword: '',
      email: '',
      city: ''
    }
  })

  const [registerUser] = useAddUserMution()

  const onRegistrationSubmit = (data: RegistrationForm ) => {
    registerUser({
      email: data.email, 
      name: data.username,
      phone_number: data.userphone,
      password: data.userpassword,
      user_city: data.city
    })
  }
   
  return (
    <Container>
    <div className="LoginPage">
      <AppHeader type="h1" headerText="Авторизация" />  
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
          {...field}/> }
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
          {...field}/> }
      />
      <Controller
        name="userphone"
        control={control}
        render={({ field }) => 
          <AppInput  
          type="tel" 
          inputPlaceholder=" Номер телефона" 
          isError={errors.userphone ? true : false}
          errorText={errors.userphone?.message}
          {...field} /> } 
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
            {...field}/> }
        />
        <Controller
          name="userpassword"
          control={control}
          render={({ field }) => 
            <AppInput 
            type="password" 
            inputPlaceholder="Пароль" 
            isError={errors.userpassword ? true: false}
            errorText={errors.userpassword?.message}
            {...field} />} 
          />
        {/* <AppInput type="text" inputPlaceholder="Имя фамилия"/> */}
        {/* // <AppInput type="tel" inputPlaceholder=" Номер телефона"/>
        // <AppInput type="password" inputPlaceholder="Пароль"/> */}
        <AppButton 
        isDisabled={!!Object.keys(errors).length} 
        buttonText="Зарегестрироваться"
        type="submit"
        />
      </form>
      <Link to="/forget-password">Забыли пароль?</Link>
      <RegistetionInfo />
      </div>
      </Container>
  );
};

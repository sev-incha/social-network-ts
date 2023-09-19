import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import { Container } from "../../components/UI/Header/Container/Container";
import { AppHeader } from "../../components/AppHeder/AppHeader";
import { AppInput } from "../../components/UI/Header/AppInput/AppInput";
import { RegistetionInfo } from "../../components/RegistrationInfo/RegistetionInfo";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { User } from "../../store/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { userGetUserQuery, useLoginUserMution } from "../../store/api/authApi";

const mockUser: User = {
  user_id: 999,
  name: 'Pavel',
  mail: 'test@test.com',
  phone_number: '981234567',
  reg_data: new Date().toISOString(),
  city: 'Tashkent'
}

interface LoginForm {
  useremail: string
  userpassword: string
}

const LoginFormSchema = yup.object({
  useremail: yup.string().required('Обезателное поле'),
  userpassword: yup.string().required('Обезателное поле')
});

export const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver ( LoginFormSchema),
    defaultValues: {
      useremail: '',
      userpassword: '',
    }
  });

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const [ loginUser, { data: userData}] = useLoginUserMution()

  useEffect (() => {
    if (userData?.user_id) {
      navigate('/profile')
    }
  }, [userData, navigate ]);

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      const res = await loginUser({
        email: data.useremail,
        password: data.userpassword
      })

      return res
    } catch (err) {
      throw err
    }
  }
}
 
  return (
    <Container>
    <div className="LoginPage">
      <AppHeader type="h1" headerText="Авторизация" />  
      <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Controller 
        name="useremail" 
        control={control}
        render={({ field }) => 
          <AppInput 
          type="text" 
          inputPlaceholder="email" 
          isError={errors.useremail ? true : false}
          errorText={errors.useremail?.message}
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
      <AppButton 
      buttonText="Войти"
      isDisabled={false}
      type="button" 
      />
      </form>
      <Link to="/forget-password">Забыли пароль?</Link>
      <RegistetionInfo />
    </div>
    </Container>
  );


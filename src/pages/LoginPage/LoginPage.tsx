import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Container } from "../../components/UI/Container/Container";
import "./LoginPage.scss";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { User } from "../../store/userSlice";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGetUserQuery, useLoginUserMutation } from "../../store/api/authApi";
import { TestInput } from "../../components/UI/AppInput/TestInput";

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


const loginFormSchema = yup.object({
  useremail: yup.string().required('Обязательное поле'),
  userpassword: yup.string().required('Обязательное поле')
})


export const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: '',
      userpassword: '',
    }
  })

  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginUser, { data: userData }] = useLoginUserMutation()

  useEffect(() => {
    if (userData?.user_id) {
      navigate('/profile')
    }
  }, [userData, navigate])

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
                inputPlaceholder="Имя фамилия"
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
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
                defaultValue={''}
                {...field}
              />
            }
          />
          <AppButton 
            buttonText="Войти" 
            isDisabled={false} 
            type="submit"
          />
        </form> 
          <Link to="/forget-password">Забыли пароль?</Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};

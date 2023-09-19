import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider }  from "styled-components";
import { theme } from "./theme/theme";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { store } from "./store/store";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

export const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage/>
    },
    {
      path: '/main',
      element: <MainPage/>
    },
    {
      path: '/registration',
      element: <RegistrationPage/>
    },
    {
      path: '/profile',
      element: <ProfilePage/>
    }
  ])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes}/>
      </ThemeProvider>
    </Provider>
  );
};


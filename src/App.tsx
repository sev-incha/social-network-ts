import React from "react";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { store } from "./store/store";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />
    },
    {
      path: '/main',
      element: <MainPage />
    },
    {
      path: '/registration',
      element: <RegistrationPage />
    },
    {
      path: '/profile',
      element: <ProfilePage />
    }
  ])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

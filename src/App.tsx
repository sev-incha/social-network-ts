import React from "react";
import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <LoginPage /> */}
        <MainPage />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Header } from "./components/UI/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <LoginPage />
      </div>
    </div>
  );
};

export default App;

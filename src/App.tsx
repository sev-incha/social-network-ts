import React from "react";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Header } from "./components/UI/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProfilePage />
      </div>
    </div>
  );
};

export default App;

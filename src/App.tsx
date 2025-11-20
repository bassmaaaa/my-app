import { useEffect, useState } from "react";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //krml yghyr l login
  const handleLogin = () => {
  
  setIsLoggedIn(true);
};
//krml l token yhta bl local
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, []);
//logout
const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

 
  if (isLoggedIn) {
    return (
      <div>
        <MainLayout
          onLogout={() => {
          handleLogout();
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <AuthLayout onLogin={() =>{handleLogin()}}/>
        <button
          className="bg-blue-500 text-white"
          onClick={() => {
            setIsLoggedIn(true);
            console.log(isLoggedIn);
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default App;

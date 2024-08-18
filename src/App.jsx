import React, { useContext } from 'react';
import './App.css'
import { Context } from "./context/context";
import Dashboard from "./routes/Dashboard";
import LoginPage from "./routes/Login";

function App() {
  const { token } = useContext(Context);
  return token ? <Dashboard /> : <LoginPage />;
}

export default App
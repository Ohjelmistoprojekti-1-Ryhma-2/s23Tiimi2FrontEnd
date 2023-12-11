import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Main2 from './Components/Main2'
import Products from './Components/Products'
import About from './Components/About'
import RegisterForm from './Components/RegisterForm'
import Profile from './Components/Profile'
import "./App.css";

export default function App() {

  const [renderedPage, setRenderedPage] = useState("main")

  const navigate = (event, renderedPage) => {
    setRenderedPage(renderedPage)
  }

  return (
    <div className="App">
      <Tabs value={renderedPage} onChange={navigate} centered>
        <Tab value="main" label="Main" />
        <Tab value="products" label="Products" />
        <Tab value="about" label="About" />
        <Tab value="register" label="Register here!" />
        <Tab value="profile" label="Profile" />
      </Tabs>
      <div className="content-area">
        {renderedPage === "main" && <Main2 />}
        {renderedPage === "products" && <Products />}
        {renderedPage === "about" && <About />}
        {renderedPage === "register" && <RegisterForm />}
        {renderedPage === "profile" && <Profile />}
      </div>
    </div>
  );
}
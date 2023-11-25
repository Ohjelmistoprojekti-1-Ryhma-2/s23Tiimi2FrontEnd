
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Main from './components/Main'
import Products from './Components/Products'
import About from './components/About'
import RegisterForm from './components/RegisterForm'
import Profile from './components/Profile'



export default function App() {

  const [renderedPage, setRenderedPage] = useState("main")

  const navigate = (event, renderedPage) => {
    setRenderedPage(renderedPage)
  }

  return (
    <div className="App">
      <Tabs value={renderedPage} onChange={navigate}>
        <Tab value="main" label="Main" />
        <Tab value="products" label="Products" />
        <Tab value="about" label="About" />
        <Tab value="register" label="Register here!" />
        <Tab value="profile" label="Profile" />
      </Tabs>
      {renderedPage === "main" && <Main />}
      {renderedPage === "products" && <Products />}
      {renderedPage === "about" && <About />}
      {renderedPage === "register" && <RegisterForm />}
      {renderedPage === "profile" && <Profile />}
    </div>


  )
}
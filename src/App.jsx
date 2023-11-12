import './App.css'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Main from './components/Main'
import Products from './components/Products'
import About from './components/About'


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
      </Tabs>
      {renderedPage === "main" && <Main />}
      {renderedPage === "products" && <Products />}
      {renderedPage === "about" && <About />}
    </div>

  )
}

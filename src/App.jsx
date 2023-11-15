
import Products from './Components/Products'
export default function App() {
 

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

import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"


const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="cart" element={<Cart/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}   

export default App
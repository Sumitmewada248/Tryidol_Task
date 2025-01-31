import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

import { FaSearch } from "react-icons/fa"

const Header = () => {

const product=useSelector(state=>state.myproduct.cart)
const navigate=useNavigate()
console.log(product)
const proLength=product.length

const gotoCartPage=()=>{
    navigate("/cart")
}





    return (
        <>
            <div id="header">

         <span id="procounter">{proLength}</span>
         <a href="#" id="cart" onClick={gotoCartPage}> <FaShoppingCart id="carticon"/></a>
         <FaSearch/>

            </div>
        </>
    )
}
export default Header
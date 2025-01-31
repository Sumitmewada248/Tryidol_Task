
import { useSelector,useDispatch } from "react-redux"
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntIncrement,qntDecrement,removeItem } from "../product";
import { useNavigate } from "react-router-dom";

const Cart=()=>{    

    const cartData=useSelector(state=>state.myproduct.cart)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    let totAmount=0;

    const MyData=cartData.map((key)=>{
        totAmount+=key.price*key.qnty
        return(
            <tr>
                <td><img src={key.images} height="100" width="100" /></td>
                 <td>{key.name}</td>
                 
                 <td>{key.description}</td>
                <td>{key.price}</td>
            
                <td>
              <FaMinusCircle onClick={()=>{dispatch(qntDecrement({id:key.id}))}}/>

                {key.qnty}

              <FaPlusCircle onClick={()=>{dispatch(qntIncrement({id:key.id}))}}/>

             </td>
                <td>{key.price*key.qnty}</td>
                <td id="remove"><button onClick={()=>{dispatch(removeItem({id:key.id}))}}>Remove</button></td>
            </tr>


        )
    })
              
                return (
        <>
        
        <h1>Our Electorinc Product</h1>

        <Table striped bordered hover>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
            
                    
                    
                    <th>Category</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                {MyData}
            </tbody>
            <tr>
                <th>#</th>
                
                <th></th>
                <th></th>
                <th></th>
                <th> Amount :</th>
                <th>{totAmount}</th>
                <th></th>
                
    
            </tr>

        </Table>

        </>
    )
}

export default Cart
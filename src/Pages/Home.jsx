

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState,useEffect } from "react"
import { addToCart } from "../product"
import { useDispatch } from "react-redux"
import axios from "axios"



const Home = () => {    

    const [mydata,setmydata]=useState([])
    const dispatch=useDispatch()

    const loadData=()=>{
        let api="http://localhost:3000/products"
        axios.get(api).then((res)=>{
            setmydata(res.data)
        })
    }

    useEffect(()=>{
        loadData()
    },[])
    
    const ans=mydata.map((key)=>{
        return(

            <Card style={{ width: '18rem', marginTop:"20px" }}>
            <Card.Img variant="top" src={key.images} height="250" />
            <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <Card.Text>
                {key.description}
                <h5> Product for : {key.category}</h5>
                <h4 style={{color:'red'}}> Price :  {key.price} </h4>
               
              </Card.Text>
      
              <Button variant="primary"
               onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, desc:key.description, cate:key.category, price:key.price, images:key.images, qnty:1 }))}}>
                Add To Cart</Button>
            </Card.Body>
          </Card>

        )
    })
    

    return (
        <>
        <div id='productData'> {ans}</div>
        
       
        </>
    )

}
export default Home
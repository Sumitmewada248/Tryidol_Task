import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name:"myproduct",
    initialState:{cart:[]},
    reducers:{
        addToCart:(state,actions)=>{
            const productExists = state.cart.some(item => item.id === actions.payload.id);
            if (!productExists) {
                state.cart.push(actions.payload);
            }
        },

        qntIncrement:(state,actions)=>{
            for (var i=0; i<state.cart.length; i++)
                {
                    if (state.cart[i].id==actions.payload.id)
                    {
                        state.cart[i].qnty++;
                    }
                }
                console.log(actions.payload);
        },
        qntDecrement:(state,actions)=>{
           
            for (var i=0; i<state.cart.length; i++)
                {
                    if (state.cart[i].id==actions.payload.id)
                    {
                        if (state.cart[i].qnty<=1)
                        {
                            alert("Quantity not less than one!")
                        }
                        else 
                        {
                            state.cart[i].qnty--;
                        }
                    }
                }

        },
        removeItem:(state,actions)=>{
          console.log(actions.payload.id);
            state.cart=state.cart.filter(item=>item.id!=actions.payload.id);
        }
        
    }
})


export const {addToCart,qntIncrement,qntDecrement,removeItem}=productSlice.actions
export default productSlice.reducer
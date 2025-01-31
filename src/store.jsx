import { configureStore } from "@reduxjs/toolkit";
import proReducer from "./product";
 const store = configureStore({
    reducer: {
        myproduct: proReducer
    }
})

export default store
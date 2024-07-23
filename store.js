import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slics'

let store = configureStore({
    reducer:{
        task : taskReducer
    }
})

export {store}
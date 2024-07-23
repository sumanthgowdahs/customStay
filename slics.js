import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    cart:{
        House:[],
        beds :[],
        dining :[],
        tv:[],
        cooler:[]
    }
}

let taskSlice = createSlice({
    name:"hotel",
    initialState,
    reducers:{
        addItemsHouse:(cState,action)=>{
            console.log(action.payload);
            let [item] = action.payload
            cState.cart.House.push(item)
        },
        addItemsBeds:(cState,action)=>{
            let [item] = action.payload
            cState.cart.beds.push(item)
        },
        addItemsDining:(cState,action)=>{
            let [item] = action.payload
            cState.cart.dining.push(item)
        },
        addItemsTv:(cState,action)=>{
            let [item] = action.payload
            cState.cart.tv.push(item)
        },
        addItemsCooler:(cState,action)=>{
            let [item] = action.payload
            cState.cart.cooler.push(item)
        }
    }
})

export let {addItemsHouse , addItemsBeds,addItemsDining,addItemsTv,addItemsCooler} = taskSlice.actions
export default taskSlice.reducer
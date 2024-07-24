import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    cart: {
        House: [],
        beds: [],
        dining: [],
        tv: [],
        cooler: []
    },
    totalCartCount: 0,
    finalProducts: []
}

let taskSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        addItemsHouse: (cState, action) => {
            let [item] = action.payload
            cState.cart.House.push(item)
        },
        addItemsBeds: (cState, action) => {
            let [item] = action.payload
            cState.cart.beds.push(item)
        },
        addItemsDining: (cState, action) => {
            let [item] = action.payload
            cState.cart.dining.push(item)
        },
        addItemsTv: (cState, action) => {
            let [item] = action.payload
            cState.cart.tv.push(item)
        },
        addItemsCooler: (cState, action) => {
            let [item] = action.payload
            cState.cart.cooler.push(item)
        },
        totalCartCount: (cState, action) => {
            cState.totalCartCount = cState.cart.House.length + cState.cart.beds.length + cState.cart.dining.length + cState.cart.tv.length + cState.cart.cooler.length
        },
        customItems: (cState, action) => {
            cState.finalProducts = [...cState.finalProducts , action.payload]
        
        },
        customItemDelete : (cState,action)=>{
            
            cState.finalProducts = action.payload
        }
    }
})

export let { addItemsHouse, addItemsBeds, addItemsDining, addItemsTv, addItemsCooler, totalCartCount, customItems,customItemDelete } = taskSlice.actions
export default taskSlice.reducer
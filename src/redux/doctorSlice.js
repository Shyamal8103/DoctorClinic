import { createSlice } from "@reduxjs/toolkit";

const savedata=JSON.parse(localStorage.getItem("storedata")) || {}

const initialState={
    value:savedata || {}
}

const dSlice=createSlice({
    name: "dSlice",
    initialState,reducers:{
        doc:(state,action)=>{
            state.value=action.payload
            // console.log(state.value)
        }
    }
})
export const {doc}=dSlice.actions
export default dSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const dSlice=createSlice({
    name: "dSlice",
    initialState:{
        value:{}
    },reducers:{
        doc:(state,action)=>{
            state.value=action.payload
            // console.log(state.value)
        }
    }
})
export const {doc}=dSlice.actions
export default dSlice.reducer
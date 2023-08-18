import { createSlice } from "@reduxjs/toolkit" 

const Rdata=createSlice({
    name : "ReceptionistData",
    initialState:{
        value : []
    },reducers:{
        addRecep:(state,action)=>{
            state.value=action.payload
        }
    }
    
})
export const {addRecep}=Rdata.actions

export default Rdata.reducer
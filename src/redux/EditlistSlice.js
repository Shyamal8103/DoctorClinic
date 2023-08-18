import { createSlice } from "@reduxjs/toolkit";

const updateReception=createSlice({
    name: 'Updatereception',
    initialState:{
        value:undefined
    },reducers:{
        getObject:(state,action)=>{
            state.value=action.payload
        }
    }
})


export const {getObject}=updateReception.actions
export default updateReception.reducer
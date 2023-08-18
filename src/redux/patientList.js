import { createSlice } from "@reduxjs/toolkit";
const patientSlice=createSlice({
    name:'mypatient',
    initialState:{
        value:[]
    },reducers:{
        getPatientData:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {getPatientData}=patientSlice.actions
export default patientSlice.reducer
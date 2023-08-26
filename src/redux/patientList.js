import { createSlice } from "@reduxjs/toolkit";
const patientSlice=createSlice({
    name:'mypatient',
    initialState:{
        value:[]
    },reducers:{
        getPatientData:(state,action)=>{
            state.value=action.payload
        },checkUncheckData:(state,action)=>{
            state.value=action.payload
        },delpatient:(state,action)=>{
            state.value=state.value.filter(ob=>ob.id!=action.payload)
        },editdata:(state,action)=>{
            state.value=action.payload
        },updatedata:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {getPatientData,checkUncheckData,delpatient,editdata,updatedata}=patientSlice.actions
export default patientSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./doctorSlice";
import recData from "./addReceptionist"
import abc from "../redux/ReceptionListslice"
import itemObject from "./EditlistSlice"
import pationtL from "./patientList"

const store=configureStore({
    reducer:{
        dData:mySlice,
        ReceptionistData: recData,
        GetRList: abc,
        updateReceptionItem: itemObject,
        PatientList: pationtL
    }
})

store.subscribe(()=>{
    const data=store.getState().dData.value
    const savedata=JSON.stringify(data)
    localStorage.setItem("storedata",savedata)
})

export default store
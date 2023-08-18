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

export default store
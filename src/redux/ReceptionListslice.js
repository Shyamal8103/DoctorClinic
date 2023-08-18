import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ReceptionListslice = createSlice({
  name: "myRlist",
  initialState: {
    value: [],
  },
  reducers: {
    getList: (state, action) => {
      state.value = action.payload;
    //   console.log(state.value);
    },
    removeListItems:(state,action)=>{
      state.value=state.value.filter(ob=>ob.id!=action.payload)
    }
  },
});

export const { getList,removeListItems } = ReceptionListslice.actions;
export default ReceptionListslice.reducer;

import axios from "axios"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRecep } from "../redux/addReceptionist"

export default function AddReception(){
    const token1=useSelector(state=>state.dData.value)
    
    const dispatch =useDispatch()
    const namebox=useRef()
    const emailbox=useRef()
    const numberbox=useRef()
    const passbox=useRef()
    const addressbox=useRef()
    const token=token1.msg
    const [status,setstatus]=useState('')

    const submitData=async (event)=>{
        const ob={
            name:namebox.current.value,phoneNumber:numberbox.current.value,email:emailbox.current.value,password:passbox.current.value,raddress:addressbox.current.value
         }
        event.preventDefault()
        
        const response=await axios.post("http://apps.codebetter.in:8082/clinic/api/reception/save",ob,{headers:{Authorization:`Bearer ${token}`}})

        
        dispatch(addRecep(response.data.data))
        setstatus(response.data)
        event.target.reset()

    }
    return <div className="d-flex justify-content-center" style={{flexDirection:"column"}}>
        <div className="row mt-5">
            <div className="col-lg-8">
        <h1 className="text-center text-primary">Reception Form</h1>
        <form onSubmit={submitData}>
        <div className="row mt-5">
            <div className="col-lg-6">
                <label htmlFor="name">Reception Name : </label>
                <input type="text" ref={namebox} className="form-control" name="name" id="" />
            </div>
            <div className="col-lg-6">
                <label htmlFor="email">Reception Email : </label>
                <input type="email" ref={emailbox} name="email" id="" className="form-control" />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6">
                <label htmlFor="password">Reception Password : </label>
                <input type="password" ref={passbox}  className="form-control" name="password" id="" />
            </div>
            <div className="col-lg-6">
                <label htmlFor="phoneNumber">Reception PhoneNumber : </label>
                <input type="phoneNumber" ref={numberbox} name="phoneNumber" className="form-control" id="" />
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6">
                <label htmlFor="address">Reception Address : </label>
                <input type="address" ref={addressbox} name="address" id="" className="form-control" />
            </div>
            <div className="col-lg-6 mt-4">
                <button className="btn btn-primary">Add Receiptionist</button>
            </div>
        </div>
        </form>
        {status.status?<b>{status.msg}</b>:''}
        </div>
        </div>
    </div>
}
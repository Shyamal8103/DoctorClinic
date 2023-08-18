import axios from "axios"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function EditList(){
    const [errormsg,seterrormsg]=useState()
    const getToken=useSelector(state=>state.dData.value)
    const token=getToken.msg
    const namebox=useRef()
    const emailbox=useRef()
    const passbox=useRef()
    const numberbox=useRef()
    const addressbox=useRef()
    const navigate=useNavigate()
    const listObject=useSelector(state=>state.updateReceptionItem.value)
    const updateReception=async(event)=>{
        event.preventDefault()
        const ob={
            name:namebox.current.value,
            password:passbox.current.value,
            oldPassword:listObject.password,
            phoneNumber:numberbox.current.value
    
         }
         
        const res=await axios.put(`http://apps.codebetter.in:8082/clinic/api/reception/updateReception/${listObject.id}`,ob,{headers:{Authorization:`Bearer ${token}`}})
        if(res.data.status){

            navigate('/receptionlist')
        }else{
            seterrormsg(res.data.msg)
        }
        

    }

    return <div>
         <form onSubmit={updateReception}>
        <div className="container">
        
            <div className="row mt-3">
                <div className="col-lg-6">
                <b htmlFor="name"> Name : </b>
                </div>
                <div className="col-lg-6">
                <input type="text"  ref={namebox} defaultValue={listObject.name} className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                <b htmlFor="name"> Email : </b>
                </div>
                <div className="col-lg-6">
                <input type="email" ref={emailbox} className="form-control" defaultValue={listObject.email} name="name" id="" />
            </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                <b htmlFor="name"> Passord : </b>
                </div>
                <div className="col-lg-6">
                <input type="text" ref={passbox} defaultValue={listObject.password} className="form-control" name="name" id="" />
            </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                <b htmlFor="name"> Phone Number : </b>
                </div>
                <div className="col-lg-6">
                <input type="number" defaultValue={listObject.phoneNumber} ref={numberbox} className="form-control" name="name" id="" />
            </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                <b htmlFor="name"> Address : </b>
                </div>
                <div className="col-lg-6">
                <input type="text" defaultValue={listObject.raddress} ref={addressbox} className="form-control" />
            </div>
            </div>
            
            <div className="col-lg-6 mt-4 d-flex justify-content-end">
                <button className="btn btn-primary">Update</button>
            </div>
        </div>
        <b>{errormsg}</b>
        </form>
    </div>
}
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getList, removeListItems } from "../redux/ReceptionListslice"
import { useNavigate } from "react-router-dom"
import { getObject } from "../redux/EditlistSlice"

export default function ReceptionList(){
    const Rlist=useSelector(state=>state.GetRList.value)
    const dispatch=useDispatch()
    const getToken=useSelector(state=>state.dData.value)
    const token=getToken.msg
    const navigate=useNavigate()
    // const dobject=useRef()
    const fetchdata=async()=>{
        const response= await axios.get("http://apps.codebetter.in:8082/clinic/api/reception/lists",{headers:{Authorization:`Bearer ${token}`}})

        
        
        dispatch(getList(response.data.data))
    }
    
    const removeReception=async(ob)=>{
        const confir=window.confirm("Are You Sure to delete this Receptionist")
        if(confir){
        const response=await axios.put(`http://apps.codebetter.in:8082/clinic/api/reception/delete/${ob.id}`,null,{headers:{Authorization:`Bearer ${token}`}})
        
        console.log(token)
        console.log(response)
        dispatch(removeListItems(ob.id))}
    }

    const editListdata=(ob)=>{
        navigate('/editList')
        dispatch(getObject(ob))
    }
    useEffect(()=>{
        fetchdata()
    },[])

    return <div>
        <h1 className="text-center text-primary">Reception list</h1>
        <table className="table table-responsive">
            <thead>
                <tr>
                    <td>S.No</td>
                    <td>Name</td>
                    <td>Phone Number</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {Rlist.map((ob,index)=><tr>
                    <td>{index+1}</td>
                    <td>{ob.name}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.email}</td>
                    <td>{ob.password}</td>
                    <td><button className="btn btn-sm btn-primary" onClick={()=>{editListdata(ob)}}>Edit</button>&nbsp;<button onClick={()=>removeReception(ob)} className="btn btn-sm btn-danger">Delete</button></td>
                </tr>)}
                {/* {console.log(Rlist)} */}
            </tbody>
        </table>
    </div>
}
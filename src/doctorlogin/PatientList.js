import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPatientData,checkUncheckData } from "../redux/patientList"

export default function PatientList(){
    const tokenstate=useSelector(state=>state.dData.value)
    const token=tokenstate.msg
    const [displayData,setDisplayData]=useState(null)
    const pt=useSelector(state=>state.PatientList.value)
    const dispatch=useDispatch()

    const showPatientList=async()=>{
        const res=await axios.get("http://apps.codebetter.in:8082/clinic/api/patient/list",{headers:{Authorization:`Bearer ${token}`}})
        // console.log(res)
        dispatch(getPatientData(res.data.data))
    }

    const checkorNot=async (ob)=>{
        
        const active=ob.activeStatus
        let updatedData=pt.map(obj=>obj.id==ob.id?{...obj,activeStatus:!obj.activeStatus}:obj)
        if(active){
            const response=await axios.put("http://apps.codebetter.in:8082/clinic/api/patient/done/"+ob.id,null,{headers:{Authorization:`Bearer ${token}`}})
            // console.log(response)
            dispatch(checkUncheckData(updatedData))

        }else{
            const response=await axios.put("http://apps.codebetter.in:8082/clinic/api/patient/undo/"+ob.id,null,{headers:{Authorization:`Bearer ${token}`}})
            // console.log(response)
            dispatch(checkUncheckData(updatedData))

        }
    }

    useEffect(()=>{
        showPatientList()
    },[])
    return <div>
    <h1 className="text-center text-primary">Patient list</h1>
    <div>
        <button className="btn btn-primary" onClick={()=>setDisplayData(undefined)}>All Patient : {pt.length}</button>&nbsp;&nbsp;<button className="btn btn-primary" onClick={()=>setDisplayData(true)}>Appointment : {pt.filter(ob=>ob.activeStatus==true).length}</button>&nbsp;&nbsp;<button className="btn btn-primary" onClick={()=>setDisplayData(false)}>Checkup Done : {pt.filter(ob=>ob.activeStatus==false).length}</button>
    </div>
    <table className="table table-responsive">
        <thead>
            <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Phone Number</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {pt.filter(obj=>displayData==undefined || obj.activeStatus==displayData).map((ob,index)=><tr>
                <td>{index+1}</td>
                <td>{ob.name}</td>
                <td>{ob.sex}</td>
                <td>{ob.age}</td>
                <td>{ob.phoneNumber}</td>
                <td>{ob.activeStatus?<button className="btn btn-sm btn-primary" onClick={()=>checkorNot(ob)} >Appointment</button>:<button className="btn btn-sm btn-success" onClick={()=>checkorNot(ob)}  >Checkup Done</button>}</td>
            </tr>)}
            {console.log(pt)}
        </tbody>
    </table>
</div>
}
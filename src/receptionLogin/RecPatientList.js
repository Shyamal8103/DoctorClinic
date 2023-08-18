import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPatientData } from "../redux/patientList"

export default function RecPatientList(){
    const tokenstate=useSelector(state=>state.dData.value)
    const token=tokenstate.msg
    const pt=useSelector(state=>state.PatientList.value)
    const dispatch=useDispatch()

    const showPatientList=async()=>{
        const res=await axios.get("http://apps.codebetter.in:8082/clinic/api/patient/lists",{headers:{Authorization:`Bearer ${token}`}})
        console.log(res)
        dispatch(getPatientData(res.data.data))
    }

    useEffect(()=>{
        showPatientList()
    },[])
    return <div>
    <h1 className="text-center text-primary">Patient list</h1>
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
            {pt.map((ob,index)=><tr>
                <td>{index+1}</td>
                <td>{ob.name}</td>
                <td>{ob.sex}</td>
                <td>{ob.age}</td>
                <td>{ob.phoneNumber}</td>
                <td><button className="btn btn-sm btn-primary" >Edit</button>&nbsp;<button className="btn btn-sm btn-danger">Delete</button></td>
            </tr>)}
            {/* {console.log(Rlist)} */}
        </tbody>
    </table>
</div>
}
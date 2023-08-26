import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPatientData } from "../redux/patientList"
import "./patientshow.css"
import { delpatient,editdata,updatedata } from "../redux/patientList"

export default function RecPatientList(){
  // const [pt,setPt]=useState()
    const [namebox,setNamebox]=useState()
    const [datebox,setDatebox]=useState()
    const [numberbox,setNumberbox]=useState()
    const tokenstate=useSelector(state=>state.dData.value)
    const token=tokenstate.msg
    const pt=useSelector(state=>state.PatientList.value)
    // console.log("pt",pt)
    const dispatch=useDispatch()

    
    
    const update=async(ob)=>{
      if(ob.dis){
        const editstate=pt.map(obj=>obj.id==ob.id?{...obj,dis:!obj.dis}:obj)
        dispatch(editdata(editstate))

      }else{
      const inputob={
        name:namebox,
        appointmentdate:datebox,
        phoneNumber:numberbox
     }
    //  console.log("inputob",inputob)
     const res=await axios.put("http://apps.codebetter.in:8082/clinic/api/patient/update/"+ob.id,inputob,{headers:{Authorization:"Bearer "+token}})
    //  console.log("res",res)
    //  dispatch(updatedata(res.data))

    const editstate=pt.map(obj=>obj.id==ob.id?{...obj,dis:!obj.dis}:obj)
      dispatch(editdata(editstate))
    }
    }

    const showPatientList=async()=>{
        const res=await axios.get("http://apps.codebetter.in:8082/clinic/api/patient/lists",{headers:{Authorization:`Bearer ${token}`}})
        // console.log("res",res.data.data)
        let newdata=res.data.data.map(ob=>({...ob,dis:true}))
        // console.log(newdata)
        dispatch(getPatientData(newdata))
        // setPt(res.data.data)
    }

    const dpatient=async(ob)=>{
        // console.log("ob",ob)
        const res=await axios.delete("http://apps.codebetter.in:8082/clinic/api/patient/delete/"+ob.id,{headers:{Authorization:"Bearer "+token}})
        // console.log(res)
        if(res.status){

            dispatch(delpatient(ob.id))
        }
    }

    useEffect(()=>{
        showPatientList()
    },[])


    return <div>
    <h1 className="text-center text-primary">Patient list</h1>
    <div className="row">
    {pt.map((ob,index)=><div key={ob.id} className="col-lg-4 col-xl-12">
        <section style={{backgroundColor: "#f4f5f7;"}}>
  <div class="row h-100">
    {/* <div class="row d-flex justify-content-center align-items-center h-150"> */}
      <div class="col col-lg-12 mb-4 mb-lg-0">
        <div class="card mb-3" style={{borderRadius:".5rem;"}}>
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style={{borderTopLeftRadius:".5rem", borderBottomLeftRadius: ".5rem;"}}>
              <img src="../img/profilelogo.jpg"
                alt="Avatar" class="img-fluid my-5" style={{width: "80px;"}} />
              <h5>{ob.name}</h5>
              
             {ob.dis?<button className="btn btn-primary" onClick={()=>update(ob)} style={{borderRadius:"20px",width:"100px"}}>Edit</button>:<button className="btn btn-primary" onClick={()=>update(ob)} style={{borderRadius:"20px",width:"100px"}}>Submit</button>} 
              
            
              &nbsp;&nbsp;
              <button className="btn btn-danger" onClick={()=>dpatient(ob)} style={{borderRadius:"20px",width:"100px"}}>Delete</button>
              
              
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <h6>Information</h6>
                <hr class="mt-0 mb-4"/>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h4>Name : </h4><input className="form-control" type="text" defaultValue={ob.name} style={{minWidth:"20px"}} onChange={(e)=>setNamebox(e.target.value)} disabled={ob.dis} />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-4 mb-3">
                    <h4>Age : </h4>
                    <input className="form-control" type="text" defaultValue={ob.age}  style={{minWidth:"20px"}} disabled={ob.dis} />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-4 mb-3">
                    <h4>Gender : </h4>
                    <input className="form-control" type="text" defaultValue={ob.sex}  style={{minWidth:"20px"}} disabled={ob.dis} />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h4>Appointment Date : </h4>
                    <input className="form-control" type="text" defaultValue={ob.appointmentdate} onChange={(e)=>setDatebox(e.target.value)} style={{minWidth:"20px"}} disabled={ob.dis} />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h4>Appointment Time : </h4>
                    <input className="form-control" type="text" defaultValue={ob.time}  style={{minWidth:"20px"}} disabled={ob.dis} />
                  </div>
                </div>
                <div class="row pt-1">
                  <div class="col-12 mb-3">
                    <h4>Phone Number : </h4>
                    <input className="form-control" type="text" defaultValue={ob.phoneNumber} onChange={(e)=>setNumberbox(e.target.value)} style={{minWidth:"20px"}} disabled={ob.dis} />
                  </div>
                </div>
                
            
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  </div>
</section>

    </div>)}
            {/* {console.log(Rlist)} */}
            </div> 

</div>
}
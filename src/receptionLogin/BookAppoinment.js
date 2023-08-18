import axios from "axios"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"

export default function BookAppoinment(){
    const [savemsg,setsavemsg]=useState('')
    const nameBox=useRef()
    const ageBox=useRef()
    const genBox=useRef()
    const phoneBox=useRef()
    const dateBox=useRef()
    const timeBox=useRef()
    const tokenstate=useSelector(state=>state.dData.value)
    const token=tokenstate.msg
    const saveAppointment=async(event)=>{
        event.preventDefault()
        const ob={
            name: nameBox.current.value,
            sex:genBox.current.value,
            age:ageBox.current.value,
            phoneNumber:phoneBox.current.value,
            appointmentdate:dateBox.current.value,
            time:timeBox.current.value
         }
         const res=await axios.post('http://apps.codebetter.in:8082/clinic/api/patient/addpatient',ob,{headers:{Authorization:`Bearer ${token}`}})
         console.log(res)
         setsavemsg(res.data.msg)
         event.target.reset()

    }
    return <div  className="container d-flex justify-content-center"> 
        <div>
                <div>
                    
                       
                            <h5 class="d-inline-block text-primary text-center text-uppercase border-bottom border-5">Appointment</h5>
                            <h1 class="display-4">Make An Appointment For Your Family</h1>
                    
                        
                    
                    
                </div>
            <div>
                        <div class="bg-light text-center rounded p-5">
                            <h1 class="mb-4">Book An Appointment</h1>
                            <form onSubmit={saveAppointment}>
                                <div class="row g-3">
                                    
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control bg-white border-0" ref={nameBox} placeholder="Patient Name" style={{height:"55px;"}}/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <select ref={genBox} class="form-control bg-white border-0">
                                            <option value="" >Select gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="number" ref={ageBox} class="form-control bg-white border-0" placeholder="Patient Age" style={{height:"55px;"}}/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="number" class="form-control bg-white border-0" ref={phoneBox} placeholder="Patient Phone Number" style={{height:"55px;"}}/>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                            <input type="date"
                                                class="form-control bg-white border-0 datetimepicker-input"
                                                placeholder="Date" ref={dateBox} style={{height:"55px;"}}/>
                                    
                                    </div>
                                    <div class="col-12 col-sm-6">
                                    
                                            <input type="time"
                                                class="form-control bg-white border-0 datetimepicker-input"
                                                placeholder="Time" ref={timeBox} style={{height:"55px;"}}/>
                                    
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                    </div>
                                </div>
                            </form>
                            <b className="text-success">{savemsg}</b>          
                        </div>
                    </div>
            </div>
    </div>
    
}
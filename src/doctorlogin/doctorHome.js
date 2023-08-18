import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function DoctorHome(){
    const doctorDetail=useSelector(state=>state.dData.value)
    
    return <><div>
    <div><img src="./public/img/doctor.png" alt="erroe in loading image" /></div>
        <div className="container d-flex justify-content-center mt-5" >
            <div className="sub-container mt-5">
        <h1 className="text-center text-primary">Welcome Dr. {doctorDetail.data.name}</h1>
                <div className="row  mt-5">
                    <div className="col-lg-6">
                    <b>ID : </b>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" value={doctorDetail.data.id} className="form-control" disabled />
                    </div>    
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                    <b>Name : </b>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" className="form-control" disabled value={doctorDetail.data.name} />
                    </div>    
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                    <b>Email : </b>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" value={doctorDetail.data.email} className="form-control" disabled />
                    </div>    
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6">
                    <b>Phone Number : </b>
                    </div>
                    <div className="col-lg-6">
                    <input type="text" value={doctorDetail.data.phoneNumber} className="form-control" disabled />
                    </div>    
                </div>
                
               
            </div>
        </div>
        </div>
    </>
}
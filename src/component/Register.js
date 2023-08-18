import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register(){
  const namebox=useRef()
  const emailbox=useRef()
  const phonebox=useRef()
  const passbox=useRef()

  const doctorRegister=async(event)=>{
    event.preventDefault()
    let ob={
          name: namebox.current.value,
          phoneNumber: phonebox.current.value,
          email: emailbox.current.value,
          password: passbox.current.value
                   }

      let response=await axios.post("http://apps.codebetter.in:8082/clinic/auth/doctor/save",ob)


      // if(response.status){
      //   console.log(response)
      // }

      console.log(response)
      event.target.reset()
    
  }
    return <>
     <div className="container d-flex justify-content-center">
    <div className="col-lg-6">
            <div className="bg-white text-center rounded p-5">
                 <h1 className="mb-4">Register Here</h1>
      <form onSubmit={doctorRegister}>
        <div className="row g-3">
          
         
          <div className="col-12 col-sm-6">
            <input
              type="name" ref={namebox}
              className="form-control bg-light border-0"
              placeholder="Your Name"
              style={{ height: "55px;" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email" ref={emailbox}
              className="form-control bg-light border-0"
              placeholder="Your Email"
              style={{ height: "55px;" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="number" ref={phonebox}
              className="form-control bg-light border-0"
              placeholder="Your Phone Number"
              style={{ height: "55px;" }}
            />
          </div>
          <div className="col-12 col-sm-12">
            <input
              type="password" ref={passbox}
              className="form-control bg-light border-0"
              placeholder="Confirm Password"
              style={{ height: "55px;" }}
            />
          </div>
         
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Register
            </button>
          </div>
          <b>Already have an account, please <Link to="/Login">Login</Link></b>
        </div>
      </form>
      </div>
      </div>

      </div>
    </>
}
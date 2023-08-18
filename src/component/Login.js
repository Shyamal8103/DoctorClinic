import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doc } from "../redux/doctorSlice";

export default function Login() {
  const dispatch=useDispatch()

  const navigate=useNavigate()
  const mailbox=useRef()
  const passbox=useRef()
  const dlogin=async (event)=>{
      event.preventDefault()
      let ob={
        email:mailbox.current.value,
        password:passbox.current.value
    }

    let res=await axios.post(" http://apps.codebetter.in:8082/clinic/auth/login",ob)
    if(res.status){
      dispatch(doc({...res.data}))
      res.data.type=='doctor'?navigate('/DoctorHome'):navigate('/receptionHome')
    }
  }
  return (
    <>
    <div className="container d-flex justify-content-center">
    <div class="col-lg-6">
            <div class="bg-white text-center rounded p-5">
                 <h1 class="mb-4">Login Here</h1>
      <form onSubmit={dlogin}>
        <div class="row g-3">
          
         
          <div class="col-12 col-sm-12">
            <input
              type="email" ref={mailbox}
              class="form-control bg-light border-0"
              placeholder="Your Email"
              style={{ height: "55px;" }}
            />
          </div>
          <div class="col-12 col-sm-12">
            <input
              type="password" ref={passbox}
              class="form-control bg-light border-0"
              placeholder="Your Password"
              style={{ height: "55px;" }}
            />
          </div>
         
          <div class="col-12">
            <button class="btn btn-primary w-100 py-3" type="submit">
              Login
            </button>
          </div>
          <b>Don't have an account, please <Link to="/Register">Register </Link></b>
        </div>
      </form>
      </div>
      </div>

      </div>
    </>
  );
}

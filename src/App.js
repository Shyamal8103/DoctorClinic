import Menu from "./component/Menu"
import Home from './component/Home'
import About from "./component/About"
import Services from "./component/Services"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"
import Login from "./component/Login"
import Register from "./component/Register"
import DoctorHome from "./doctorlogin/doctorHome"
import AddReception from "./doctorlogin/AddReception"
import ReceptionList from "./doctorlogin/ReceptionList"
import EditList from "./doctorlogin/EditList"
import PatientList from "./doctorlogin/PatientList"
import ReceptionHome from "./receptionLogin/ReceptionHome"
import BookAppoinment from "./receptionLogin/BookAppoinment"
import { useSelector } from "react-redux"
import WrongURL from "./component/WrongURL"
import RecPatientList from "./receptionLogin/RecPatientList"

export default function App(){
  const userData=useSelector(state=>state.dData.value)
  return <div>
    <Menu/>
    <Routes>
    {userData.status?<>
      <Route path="/DoctorHome" element={<DoctorHome/>}/>
      <Route path="/addReception" element={<AddReception/>}/>
      <Route path="/receptionlist" element={<ReceptionList/>}/>
      <Route path="/editList" element={<EditList/>}/>
      <Route path="/patientList" element={<PatientList/>}/>
      <Route path="/recpatientlist" element={<RecPatientList/>}/>
      <Route path="/receptionHome" element={<ReceptionHome/>}/>
      <Route path="/bookAppoinment" element={<BookAppoinment/>}/>
      
    </>:<>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      </>}
      <Route path="*" element={<WrongURL/>}/>
    </Routes>
    <Footer/>
  </div>
}
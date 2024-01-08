import {BiArchive} from "react-icons/bi"
import Search from "./components/Search";
import Appointments from "./components/AddAppointments";
// import appointmentList from "./data.json";
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";
function App() {
  let [appointmentList,setAppointment]=useState([]);
  let [query,setQuery]=useState("");
  let [sortBy,setSortBy]=useState("petName");
  let [orderBy,setOrderBy]=useState("asc");



  const filterdAppointment=appointmentList.filter((item=>{
    return (
      item.petName.toLowerCase().includes(query.toLowerCase())||
      item.ownerName.toLowerCase().includes(query.toLowerCase())||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )
  })).sort((a,b)=>{
    let order=(orderBy==='asc')?1:-1;
    return a[sortBy].toLowerCase()<b[sortBy].toLowerCase()?-1*order:1*order
  }
  )

  const fetchData=useCallback(()=>{
    fetch('./data.json').then(response=>response.json()).then(data=>{
      setAppointment(data);
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])
  return (
    <div className="App container mx-auto mt-3">
     <h1 className="sm:text-5xl text-xs mb-4"><BiArchive className="inline-block text-red-400 align-top"/>Your Appointments</h1>
     <Appointments  onSendAppointment={(appointment)=>{setAppointment([...appointmentList,appointment])}}
     lastId={appointmentList.reduce((max,item)=>Number(item.id)>max?Number(item.id):max,0)}
     />
     <Search query={query} onQueryChange={(myQuery=>setQuery(myQuery))}/>
     <ul className="divide-y divide-gray-200 ">
      {
        filterdAppointment.map(appointment=>(
         <AppointmentInfo key={appointment.id} appointment={appointment}
         onDeleteAppointment={appointmentId=>setAppointment(appointmentList.filter(appointment=>appointment.id!==appointmentId))}
         />
        ))
      }
     </ul>
    </div>

   
  );
}

export default App;

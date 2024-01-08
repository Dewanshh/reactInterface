import { BiTrash } from "react-icons/bi";

const AppointmentInfo=({appointment,onDeleteAppointment})=>{
    return (<li className="px-2 py-3 flex items-center">
    <button type="button" onClick={()=>onDeleteAppointment(appointment.id)} className="p-1.5 mr-1.5 mt-1 items-center bg-red-500 rounded text-white hover:bg-yellow-700 focus:outline-none focus:ring-offset-2 focus:ring-blue-500">
      <BiTrash />
    </button>
    <div className="flex-grow ml-4">
      <div className="flex  items-center">
      <h1 className="flex-none text-blue-600 text-2xl font-medium">{appointment.petName}</h1>
      <h4 className="flex-grow text-right">{appointment.aptDate}</h4>
      </div>
      <h2 className="text-blue-600 font-bold">Owner: <span className="text-black font-thin">{appointment.ownerName}</span></h2>
      <div className="leading-tight"><p>{appointment.aptNotes}</p></div>

  </div>
</li>
    )
}

export default AppointmentInfo;
import { useState } from "react"
import { BiCalendarPlus } from "react-icons/bi"
const Appointments=({lastId,onSendAppointment})=>{

let [toggleForm, setToggleForm]=useState(false);
const clearData={
    ownerName:'',
    petName:'',
    aptDate:'',
    aptTime:'',
    aptNotes:''
};
let [formData,setFormData]=useState(clearData);
function formDataPublish(){
    const appointmentInfo={
        id:lastId+1,
        ownerName:formData.ownerName,
        petName:formData.petName,
        aptDate:formData.aptDate + " "+formData.aptTime,
        aptNotes:formData.aptNotes
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
}

return (
<div className="bg-gray-200">
    <button onClick={()=>{
        setToggleForm(!toggleForm);
        }}className={`py-3 px-2 bg-blue-500 text-white text-bold w-full text-left ${toggleForm ?   `rounded-t-md`: `rounded-md`}`}>
        <BiCalendarPlus className="inline-block mr-2 align-text-top" />Add Appointment</button>
    {toggleForm && <div><div className=" border-r-2 border-b-2 border-l-2 bordere-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" htmlFor="ownerName">Owner
                Name</label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="text" name="ownerName"
                    onChange={(event)=>{setFormData({...formData,ownerName:event.target.value})}}
                    value={formData.ownerName}
                    id="ownerName" />
            </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" htmlFor="petName">Pet
                Name</label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="text" name="petName"
                    onChange={(event)=>{setFormData({...formData,petName:event.target.value})}}
                    value={formData.petName}
                    id="petName" />
            </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" htmlFor="aptDate">Apt
                Date</label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="date" 
                    value={formData.aptDate}
                    onChange={(event)=>{setFormData({...formData,aptDate:event.target.value})}}
                    name="aptDate" id="aptDate" />
            </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" htmlFor="aptTime">Apt
                Time</label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="time" name="aptTime" 
                    value={formData.aptTime}
                    id="aptTime" onChange={(event)=>setFormData({...formData,aptTime:event.target.value})} />
            </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" htmlFor="aptNotes">Appointment
                Notes</label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    className="px-2 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    type="text" name="aptNotes"
                    value={formData.aptNotes}
                    onChange={(event)=>setFormData({...formData,aptNotes:event.target.value})}
                    id="aptNotes" placeholder="Detailed comments about the condition" />
                </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
        </div>
    </div>}
</div>
)
}

export default Appointments
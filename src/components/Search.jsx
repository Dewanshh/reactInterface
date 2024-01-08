import { useState } from "react";
import { BiSearch,BiCaretDown, BiCheck } from "react-icons/bi"


const DropDown=({toggle})=>{
    if(!toggle) {
        return null;
    }
return (
<div className=" absolute right-0 mt-0.5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5   ">
    <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between cursor-pointer">Pet Name
            <BiCheck />
        </div>
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between cursor-pointer">Owner Name
            <BiCheck />
        </div>
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between cursor-pointer">Date Name
            <BiCheck />
        </div>
        <divider  className="color-black"/>
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between cursor-pointer">Asc
            <BiCheck />
        </div>
        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-between cursor-pointer">Desc
            <BiCheck />
        </div>

    </div>
</div>
);
}

const Search =({query,onQueryChange})=>{
    let [toggle,setToggle]=useState(false);
return (
<div className="py-5">
    <div className="mt-1 relative rounded-md shadow-xl">
        <div className="absolute px-6 py-2  left-0 pl-3 flex items-center justfiy-center pointer-events-none">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
        </div>
        <input type="text" onChange={(event)=>{onQueryChange(event.target.value)}} name="query" id="query" value={query}
            className="pl-8 py-2 rounded-md foucs:ring-indigo-500 block w-full md:text-sm border-3 border-gray-300"
            placeholder="Search" />
        <div className="absolute inset-y-0 right-0 flex items-center">
            <div>
                <button onClick={()=>{
                    setToggle(!toggle);
                }}type="button"
                    className="justify-center px-6 py-2 bg-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center">Sort
                    By
                    <BiCaretDown className="ml-2" /></button>
                <DropDown toggle={toggle}/>
            </div>
        </div>
    </div>
</div>
)
}

export default Search;
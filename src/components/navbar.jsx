import { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Helper } from "../store/context";
function Navbar(){
    const {nav,setnav,data,News}=useContext(Helper);
    return <div className=" uppercase text-2xl shadow-2xl">
        <h1 className="text-green-600 text-3xl cursor-pointer">NEWS-APP</h1>
        
        
        <ul className="flex  justify-center gap-9 text-gray-600 flex-wrap cursor-pointer">
            
            
            <li onClick={()=>setnav("topnews")} className={nav==="topnews"?"border-b-4 border-b-green-600  ":" "}>top news </li>
            <li onClick={()=>setnav("topheadline")} className={nav==="topheadline"?"border-b-4 border-b-green-600  ":" "}>top headlines</li>
            <li onClick={()=>setnav("newspaper")} className={nav==="newspaper"?"border-b-4 border-b-green-600  ":" "}>our newspaper</li>
            <li onClick={()=>setnav("contact")} className={nav==="contact"?"border-b-4 border-b-green-600  ":" "}>contact</li>
            <div className=" flex justify-end ">
                <form onSubmit={News}>
            <input type="text"placeholder="TOPIC" className="text-gray-600" ref={data} required/>
           <button><IoSearchOutline /></button>
            </form>
             
        </div>
             
        </ul>
        
       
    </div>

}
export default Navbar;
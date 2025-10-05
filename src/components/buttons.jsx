import { useContext } from "react";
import {Helper} from "../store/context.jsx";;
function But(){
    const {setdata,News}=useContext(Helper);
    return<div className="mt-10" >
        <h1 className="text-center text-4xl text-gray-600">QUICK NEWS </h1>
        <div className="text-white flex justify-center items-center gap-15 flex-wrap mt-5">
            <button onClick={()=>{setdata("football");News();}} className="bg-gray-800  rounded-4xl uppercase  p-3 text-3xl">football</button>
            <button onClick={()=>{setdata("cricket");News();}} className="bg-gray-800  rounded-4xl uppercase  p-3 text-3xl">cricket</button>
            <button onClick={()=>{setdata("politics");News();}} className="bg-gray-800  rounded-4xl uppercase  p-3 text-3xl">politics</button>
            <button onClick={()=>{setdata("democracy");News();}}  className="bg-gray-800  rounded-4xl uppercase  p-3 text-3xl">democracy</button>
            <button onClick={()=>{setdata("currency");News();}} className="bg-gray-800  rounded-4xl uppercase  p-3 text-3xl ">currency</button>
            
            
        </div>
    </div>

}
export default But;
import { useContext } from "react";

import { Helper } from "../store/context";
import Load from "./loading.jsx";
import { Link } from "react-router-dom";
function News(){
    const {news,loading,link,errs,color}=useContext(Helper);
    return <div className="text-center mt-20 text-2xl  md:text-3xl lg:text-3xl xl:text-3xl text-gray-600" id="n">
        <h1 >TOP BREAKING NEWS </h1>
        <p className=" text-sm  md:text-3xl lg:text-3xl xl:text-3xl">THESE ARE THE TOP POPULAR BREAKING NEWS </p>
        {loading&&<Load/>}
        <h1 className="uppercase text-red-800 text-2xl  md:text-3xl lg:text-3xl xl:text-3xl">{errs}</h1>

        <div className="flex justify-center items-center flex-wrap gap-6 mt-10 ">
            {news.map((item,index)=>(
                <div key={index}   className={`flex flex-col justify-between  w-full sm:w-[45%] lg:w-[30%] shadow-md rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 ${color?"bg-black text-green-600":"bg-white"}`}>
                    <div>
                    <h2 className=" text-2xl   text-green-600 mb-3 line-clamp-2">{item.title}</h2>
                    <p className="text-gray-600 text-base mb-4 line-clamp-3">{item.description}</p>
                    </div>
                    <Link  className="inline-block mt-auto bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-4 py-2 text-center transition duration-300" to={item.link} target="_blank" >Read more </Link>
                    </div>
            ))}
            
        </div>

    </div>

}
export default News;
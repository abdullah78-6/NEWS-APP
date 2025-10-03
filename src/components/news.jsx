import { useContext } from "react";

import { Helper } from "../store/context";
import Load from "./loading.jsx";
import { Link } from "react-router-dom";
function News(){
    const {news,loading,link,errs}=useContext(Helper);
    return <div className="text-center mt-20 text-3xl text-gray-600">
        <h1 >TOP BREAKING NEWS </h1>
        <p className="text-2xl">THESE ARE THE TOP POPULAR BREAKING NEWS </p>
        {loading&&<Load/>}

        <div className="grid gap-18 align-middle md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {news.map((item,index)=>(
                <div key={index} className=" bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition-shadow">
                    <h2 className=" text-4xl   text-green-600 mb-3">{item.title}</h2>
                    <p className="text-gray-600 text-2xl ">{item.description}</p>
                    <Link  className="bg-green-600 text-white rounded-4xl text-3xl "to={item.link} target="_blank" >Read more </Link>
                    </div>
            ))}
            
        </div>

    </div>

}
export default News;
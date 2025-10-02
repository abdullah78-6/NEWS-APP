import { useContext } from "react";
import { Helper } from "../store/context";
function News(){
    const {news}=useContext(Helper);
    return <div className="text-center mt-20 text-3xl text-gray-600">
        <h1 >TOP BREAKING NEWS </h1>
        <p className="text-2xl">THESE ARE THE TOP POPULAR BREAKING NEWS </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {news.map((item,index)=>(
                <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start hover:shadow-xl transition-shadow">
                    <h2 className=" text-4xl   text-green-600 mb-3">{item.headline}</h2>
                    <p className="text-gray-600 text-2xl ">{item.description}</p>
                    <button className="bg-green-600 text-sm  text-white rounded-4xl uppercase   " onClick={()=>alert("going in news link ")}>Read more </button>
                    </div>
            ))}
        </div>

    </div>

}
export default News;
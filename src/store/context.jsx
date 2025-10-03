import { createContext, useEffect, useRef, useState } from "react";

export const Helper=createContext();


export function Gives({children}){
    let[nav,setnav]=useState("");
    let[link ,setlink]=useState();
    let [errs,seterr]=useState();
    let [loading,setloading]=useState();
    let [news,setnews]=useState([]);
    let data=useRef();
    let apikey="pub_662e120e940d4e0b99473a3ce97785cb";
   let [call ,setcall]=useState(false);
    useEffect(()=>{
      console.log("hellow news api ");
    News();
},[]);


 async function News(e){
         setloading(true);
         let searchprompt=data.current.value;
         let apiurl=searchprompt?`https://newsdata.io/api/1/news?apikey=${apikey}&q=${encodeURIComponent(searchprompt)}&language=en`:`https://newsdata.io/api/1/latest?apikey=${apikey}&language=en`;
         console.log(searchprompt);
         if(e){
         e.preventDefault();
         }
         try{
            const res=await fetch(apiurl  ,{
               method:"GET",
               headers:{
                  Accept:"application/json"


               }

            });
            const result=await res.json();
            
            setnews(result.results);
            



         }
         catch(err){
            console.log("err is ",err);
            seterr("CHECK YOUR NETWORK CONNECTION ");
         }
         finally{
            setloading(false);

         }


     }
   return ( <Helper.Provider value={{nav,setnav,news,loading,link,errs,data,News}} >
        {children}
</Helper.Provider>
   )
    
   
}
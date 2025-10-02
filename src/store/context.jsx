import { createContext, useEffect, useState } from "react";

export const Helper=createContext();


export function Gives({children}){
    let[nav,setnav]=useState("");
    let [news,setnews]=useState(
      [
         {

         headline:"INDIA WILL PLAY 2030 FIFA WORLD CUP",
         description:"2030 WORLD CUP WILL HOST IN MORROCO ,PORTOGAL ,AND SPAIN WHILE OPENING MATCHES WILL PLAY IN ARGENTINA,PARAGUAY ,AND URUGWAY "
         }
      ]
   );
    
    useEffect(()=>{
      console.log("hellow news api ");



},[]);
   return ( <Helper.Provider value={{nav,setnav,news}} >
        {children}
</Helper.Provider>
   )
    
   
}
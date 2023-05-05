'use client'
import { ReactNode, useState } from "react";

const NewSection=(props:{children:ReactNode,title:string})=>{
  const [sectionSwitch,toggleSwitch]=useState(false);
  return(
  <>
    <div className="
      font-bold text-2xl
      text-neutral-800 hover:text-neutral-700 
      py-2 pl-2
      flex items-center">
      <button
      onClick={()=>{toggleSwitch(!sectionSwitch)}}>
      
        {props.title}
      
      </button>
    
      <svg 
        data-switch={sectionSwitch} 
        className="
          h-5 w-3 
          rotate-90 data-[switch=true]:rotate-180
          duration-500 data-[switch=true]:duration-500 
          ml-2 -translate-y-1" 
        
        viewBox="0 -20 80 80"><g transform="translate(-70,-120)"><path fill="#000000" d="m 141.4,160.9 -39.0,0 -39,0 19.5,-33.8 19.5,-33.8 19.5,33.8 z" transform="translate(2.63,21.36)" /><path fill="#ffffff" d="m 141.40382,160.94655 -39.03107,0 -39,0 19.5,-33.8 19.5,-33.8 19.5,33.8 z" transform="matrix(0.75,0,0,0.96,28.15,25.2)" /></g></svg>
    </div>

    <div 
    data-switch={sectionSwitch}
    className="
      max-h-0 data-[switch=true]:max-h-[100vh] 
      duration-500
      data-[switch=true]:z-0 -z-10 
      overflow-hidden px-2 
    text-white text-base font-semibold">

      {props.children}

    </div>
  </>

    )
}

export default NewSection;
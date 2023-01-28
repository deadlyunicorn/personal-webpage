'use client'

import { useState } from "react"


export default function TestJ(){
  
  

  const [counter,setCounter]=useState(1);
  const [objectTest1,objectUpdate1]=useState({
    inputData:[] as string[],
  })




  const [temp2,setTemp2]=useState({
    ID:[] as string[],
    NAME:[] as string[]
  })

  
  return(
    <>
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 h-4/6 " >
        <div className="border-black rounded-md border h-full bg-white bg-opacity-40">

          <div className=" my-2 px-2 ">

            <p className="text-center">hello world!</p>

            <p> object 1 test displaying data</p>

          </div>

          <div className=" my-2 px-2 flex flex-col justify-center items-center">

            <p> {JSON.stringify(objectTest1)}</p>
            <p> {JSON.stringify(objectTest1.inputData)}</p>
            <p> {objectTest1.inputData} .</p>
            <p>~~~~~~~~~~~~~~</p>

            <button 
              onClick={()=>{
                setTemp2({...temp2,
                  ID:[...temp2.ID,counter.toString()],
                  NAME:[...temp2.NAME,"2","1"]
                })
                setCounter(counter+1)
                
              }}
              className="border border-black rounded-md bg-white p-1 w-2/4">
              Submit 
            </button>

          </div>
          
          <div className="h-2/3">

          <div className="  flex m-2 h-full flex-col break-all">
            <div className="m-2 border-y border-black h-1/3 overflow-auto">
              ID: <span className="text-indigo-700 drop-shadow-md">{temp2.ID}</span>
            </div>

            <div className="m-2 break-all border-y border-black h-1/3 overflow-auto">
              ID.stringify(): <span className="text-indigo-700 drop-shadow-md">{JSON.stringify(temp2.ID)}</span>
            </div>

            <div className="m-2 border-y border-black overflow-auto break-words h-1/3">
              Here &quot;break-words&quot; class, worked better than break-all
              <br/>
              Parent Object Stringified:<br/><span className=" text-indigo-700 drop-shadow-md">{JSON.stringify(temp2)}</span>
            </div>
          </div>
          </div>


        </div>

      </div>
    </div>
    </>
  )
}
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
    <div className="h-screen overflow-auto dark:bg-gradient-to-b dark:from-zinc-800 dark:to-neutral-900">
      <div className="flex justify-center items-center p-20">

      <div className="max-w-96 rounded-md p-4 sm:h-[700px]  " >
        <div className="dark:bg-stone-900 max-w-sm flex flex-col   bg-white bg-opacity-40 rounded-md border border-black dark:border-neutral-300">

          <div className=" my-2 px-2 text-center">

            <p >hello world!</p>

            <p> object 1 test displaying data</p>

          </div>

          <div className=" my-2 px-2 flex flex-col justify-center items-center ">

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
              className="border-t border-l-2 border-black neutral-black dark:border-purple-300 rounded-md bg-white dark:bg-zinc-900 p-1 w-2/4">
              Submit 
            </button>

          </div>
          
          <div className="h-2/3">

          <div className=" flex m-2  flex-col break-all">
            <div className="m-2 border-y border-black dark:border-neutral-300  ">
              ID: <span className=" text-indigo-700 dark:text-indigo-400 drop-shadow-md shadow-black">{temp2.ID}</span>
            </div>

            <div className="m-2 break-all border-y border-black dark:border-neutral-300  ">
              ID.stringify(): <span className="text-indigo-700 dark:text-indigo-400 drop-shadow-md shadow-black">{JSON.stringify(temp2.ID)}</span>
            </div>

            <div className="m-2 border-y border-black dark:border-neutral-300 ">
              Here &quot;break-words&quot; class, worked better than break-all
              <br/>
              Parent Object Stringified:<br/><span className="  break-words text-indigo-700 dark:text-indigo-400 drop-shadow-md shadow-black">{JSON.stringify(temp2)}</span>
            </div>
          </div>
          </div>


        </div>

      </div>
      </div>

    </div>
    </>
  )
}
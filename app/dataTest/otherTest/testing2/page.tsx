'use client'

import { useState } from "react"
import Link from "next/link"


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
    <div className="bg-opacity-0 absolute">
      <Link href='/..'  target="_self"><h3>Go back..</h3></Link>
    </div>
    <div className="h-screen">
      <p className="text-center">hello world!</p>

      <p> object 1 test displaying data</p>
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
      className="border border-black rounded-md bg-white p-1"> Submit </button>
      <p>{temp2.ID}</p>
      <p>{JSON.stringify(temp2.ID)}</p>
      <p>{JSON.stringify(temp2)}</p>

    </div>
    </>
  )
}
'use client'
import { useState } from "react"

///
import {database} from "../../firebaseConfig"
import {ref,set, onValue } from "firebase/database"
import { useEffect } from "react"
///






  /////
  /////
export default function Page(){

  const dataReference = ref(database,'users/test/');
  const getReference = ref(database,'users/test/dataEntered')
  
  
  const [input,setInput]=useState([] as string[])
  const [storedInput,setStored]=useState([] as string[])

  const [fetchedData,setFetched]=useState([] as string[]) //we need to add read data here for it to update
  function writeUserData(inputted:string[]){
    set(dataReference,{
      dataEntered:[getReference,inputted], ///check line 65
    })
  }

  useEffect(()=>{
    onValue ((dataReference), (snapshot)=>{ ///CHECK CODE HERE NXT
      const data=snapshot.val();
      data!==null?setFetched(data):setFetched(["No data"])

    })
  })

 
  
  
  return(
    <>
    <div 
    className="h-screen flex flex-col justify-center items-center">
      <div>

      <p id="hell">
        Hello
      </p>
      </div>
      <input 
        className="rounded-md "
        onChange={(e)=>{
          setInput([e.target.value])
          }}/>
      <div>

        <button 
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          onClick={()=>{
            setStored(input)
            writeUserData(input) ///check line 29
          }}>
          
          Submit
        </button>
        <button
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          onClick={()=>{
            writeUserData([])
          }}
        >
          Erase Data
        </button>
      </div>
      <div className="h-96 w-96 overflow-auto ">

        <p className="h-4 m-2">Last database insertion:{fetchedData[fetchedData.length-1]} {fetchedData.length}</p>
        
        <p>All database entries: {JSON.stringify(fetchedData)}</p>
      </div>
    </div>

   

    </>
  )
  
  
}




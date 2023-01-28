'use client'
import { useState } from "react"

//import Navigate from "@/app/components/navigation"
//I wasn't able to create a NavBar component and navigate relatively to
//the page it being displayed by- using link/next


///
import {database} from "../../components/firebaseConfig"
import {ref,set, onValue } from "firebase/database"
import { useEffect } from "react"
///



const dataReference = ref(database,'users/test/');
const getReference = ref(database,'users/test/dataEntered')

function writeUserData(inputted:string){
  set(dataReference,{
    dataEntered:inputted,
  })
}




  /////
  /////
export default function Page(){

  const [input,setInput]=useState("")
  const [storedInput,setStored]=useState("")

  const [fetchedData,setFetched]=useState("") //we need to add read data here for it to update

  useEffect(()=>{
    onValue ((getReference), (snapshot)=>{ ///CHECK CODE HERE NXT
      const data=snapshot.val();
      setFetched(data)
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
          setInput(e.target.value)
          }}/>
      <div>

        <button 
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          onClick={()=>{
            setStored(input)
            writeUserData(fetchedData+input+" ")
          }}>
          
          Submit
        </button>
        <button
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          onClick={()=>{
            writeUserData("")
          }}
        >
          Erase Data
        </button>
      </div>
      <div className="h-96 w-96 overflow-auto ">

        <p className="h-4 m-2">Last database insertion:{storedInput} {}</p>
        
        <p>All database entries: {JSON.stringify(fetchedData)}</p>
      </div>
    </div>

   

    </>
  )
  
  
}




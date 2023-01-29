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
    className="h-screen bg-gradient-to-b from-green-200 to-pink-200 dark:from-gray-900 dark:to-black">
      <div className="overflow-auto p-20 flex flex-col justify-center items-center ">
      <div>

      <p id="hell">
        Hello
      </p>
      </div>
      <input 
        className="rounded-md dark:text-white"
        onChange={(e)=>{
          setInput(e.target.value)
          }}/>
      <div className="text-black dark:text-gray-900 ">

        <button 
          className=" m-2 bg-slate-200  dark:bg-slate-600 dark:border-l-cyan-800 dark:border-t-cyan-800 border-b-0 border-r-0 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg "
          onClick={()=>{
            setStored(input)
            writeUserData(fetchedData+input+" ")
          }}>
          <span className="drop-shadow-[2px_0px_2px_rgba(40,40,40,1)]">

          Submit
          </span>
        </button>
        <button
          className="dark:bg-slate-600 dark:border-l-cyan-800 dark:border-t-cyan-800 border-b-0 border-r-0  mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          onClick={()=>{
            writeUserData("")
          }}
        >
          <span className="drop-shadow-[2px_0px_2px_rgba(40,40,40,1)]">

            Erase Data
          </span>
        </button>
      </div>
      <div className="border-l border-t  max-h-96 max-w-sm p-4 overflow-auto flex flex-col break-text dark:bg-cyan-900 dark:bg-opacity-20 rounded-md m-7 bg-white bg-opacity-20">

        <p className="h-4 m-2">Last database insertion:{storedInput} {}</p>
        
        <p>All database entries: <br/>{JSON.stringify(fetchedData)}</p>
      </div>
      </div>
    </div>

   

    </>
  )
  
  
}




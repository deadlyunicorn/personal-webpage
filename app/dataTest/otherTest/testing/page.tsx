'use client'

import { useState } from "react"

///rewriting page.tsx(old) from scratch because
///I couldn't correct it by changing parts..

///importing firebase libraries

//getting the database config
import {database} from "../../../firebaseConfig"
/*
database = getDatabase(app)
app = initializeApp(firebaseConfig);

*/


///needed to select routes in our database
import {ref,set, onValue } from "firebase/database"

//needed to render live database updates
import { useEffect } from "react"



///App Function
export default function DataBaseFetch(){

  ///updating userInput with react useState
  const [userInput,setUserInput]=useState("")
  
  ///input that was submitted with the corresponding button
  const [submitInput,setSubmitInput]=useState("")

  ////////
  ///Firebase functions bellow


  ///database route for data
  const dataReference = ref(database,'users/');


  ///Rendering live changes

  //needed for storing fetched data//
  type dataType= string[] | null
  interface fetchedDataTypes{
    dataEntered: dataType
  }
  
  const [fetchedData,setFetchedData]=useState<fetchedDataTypes>({
    dataEntered:null
  })

  //storing the default value of no fetched data => used when Erasing data from the database
  // also used to locally store the info that there is no data when there is no data in the database 
  const fetchedNull={
    dataEntered:null
  }; //the initial value of the fetchedData (no data, null for all values) // check useEffect if (data==null)
  
  //on-off switch that tells if there is data or not
  const [dataExists,setDataExists]=useState(false);

  ///
  
  useEffect(()=>{
    //
    onValue (dataReference, (snapshot)=>{ // onValue(sourceRoute, (updatedDataEvent)=>{const data=updatedDataEvent.Value})
      const data=snapshot.val(); //value of updated database.

      if (data!=null){
        setFetchedData(data)
        setDataExists(true)

      }
      else{
        setFetchedData(fetchedNull)
        setDataExists(false) //At first I thought this was not needed,
        //but as the app constantly listens for new changes
        //if we delete the data, then the app continues thinking
        //that there is data
      }

    })
    //
  })
  ///writing data - this works similarly to a react setState()
  function writeData(inputted:dataType){

    set(dataReference,{
      dataEntered:inputted,
    })
  }






  /////////////
  ///JSX below


  ////////////
  ///Component that returns detailed info, it is called when data exists
  function DetailedInfo(){
    return(
      <>
      <p>Last database insertion was: &apos;{}&apos;</p>
      <p>The length of the array is:{}</p>
      <p>All database entries: {}</p>
      <p>fetchedData entries: {}</p>
      </>
    )
  }
  ///


  ///Main App JSX
  return(
    <>
    <div 
    className="h-screen flex flex-col justify-center items-center">
      
      
      <div>
        <p>Hello {JSON.stringify(fetchedData)}</p>
        <p>fetchedNull is: {JSON.stringify(fetchedNull)}</p>
        
      </div>


      <div>

        <input 
          className="rounded-md "
          onChange={(e)=>{
            //needed so that we store the userInput 
            //in some variable.
            setUserInput(e.target.value) 

          }}/>
      
      </div>


      <div>


        <button 
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          

            onClick={()=>{
              if (!dataExists){

                setSubmitInput(userInput)
                writeData([userInput]) /**
                //I initially thought that "here we can put either userInput or submitInput" 
                //BUT I was wrong
                //as I realized that this way it doesn't get updated on the database
              //unless you pressed the button twice
              //this might be due to some delay that accompanies setting SubmitInput
              //while reading its data probably is almost instant. **/
            }
            else{ ///check how i am going to fix this :)
              writeData(
                {...fetchedData,
                  dataEntered: [...fetchedData.dataEntered,userInput]
                }
              )
            }
          }}>
          
          Submit

        </button>

        <button
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          
          onClick={()=>{
            writeData(null)
          }}>
            
          Erase Data
        
        </button>


      </div>


      <div className="h-96 w-96 overflow-auto">
        <div className="h-4 m-2 text-center">

      {
        dataExists&& <DetailedInfo/>
      }
      {
        (!dataExists)&&<p>There is currently no data</p>
      }
        </div>

      
      
      </div>



    </div>
    </>
  )


}


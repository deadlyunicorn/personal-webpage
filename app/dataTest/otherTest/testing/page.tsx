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



//Import component for detailed Info
import DetailedInfo from "./detailedInfo"

///App Function
export default function DataBaseFetch(){

  ///updating userInput with react useState
  const [userInput,setUserInput]=useState("")
  

  ////////
  ///Firebase functions bellow


  ///database route for data
  const dataReference = ref(database,'users/');


  ///Rendering live changes

  const [hasLoaded,setHasLoaded]=useState(false);

  //needed for storing fetched data//
  type dataType= string[] | null
  interface dataTypesInterface{
    dataEntered:string[] | null 
  }

  
  const [fetchedData,setFetchedData]=useState<dataTypesInterface>({
    dataEntered: null 
  })

  //storing the default value of no fetched data => used when Erasing data from the database
  // also used to locally store the info that there is no data when there is no data in the database 
  const fetchedNull={
    dataEntered:null
  }; //the initial value of the fetchedData (no data, null for all values) // check useEffect if (data==null)
  
  //on-off switch that tells if there is data or not

  ///
  
  useEffect(()=>{
    //
    const fetchData =(): void=>{
       //not sure if async is needed here as "onValue" might be an async function
      onValue (dataReference,  async (snapshot) => {
        const data =  snapshot.val() //value of updated database.

        if (data != null) {
          setFetchedData(data) //removed DataExists as it was the same as fetchedData!=null which is used more in the app
        }
        else {
          setFetchedData(fetchedNull)
          //At first I thought this was not needed,
          //but as the app constantly listens for new changes
          //if we delete the data, then the app continues thinking
          //that there is data
        }

      })
    }
    //
    fetchData()
    setHasLoaded(true)
  })
  ///writing data - this works similarly to a react setState()
  const writeData=(input:dataType)=>{

    set(dataReference,{
      dataEntered:input,
    })
  }

  //adding data. Made my life easier using this
  const addData=(input:string)=>{

    if (fetchedData.dataEntered!=null){
      //In our program we use addData()
      // only when dataExists anyways
      //Typescript makes sure we don't call
      // this function when data doesn't exist.
      //
      //Error was:
      //Type 'string[] | null' is not an array type.
      //

      set(dataReference,{
        ...fetchedData,
        dataEntered:[...fetchedData.dataEntered,input]
      })
    }
  }




  /////////////
  ///JSX below





  ///Main App JSX
  return(
    <>
    <div id="page_div"
    className="h-screen flex flex-col justify-center items-center">
      
      
      <div id="instruction_div">
        <p>Add values to dataEntered:</p>
        
      </div>


      <div id="input_div">

        <input 
          className="rounded-md "
          onChange={(e)=>{
            //needed so that we store the userInput 
            //in some variable.
            setUserInput(e.target.value) 

          }}/>
      
      </div>


      <div id="button_div">


        <button 
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          

            onClick={()=>{
              if (!(fetchedData.dataEntered!=null)){

                writeData([userInput]) /**
                //I initially thought that "here we can put either userInput or submitInput" 
                //BUT I was wrong
                //as I realized that this way it doesn't get updated on the database
              //unless you pressed the button twice
              //this might be due to some delay that accompanies setting SubmitInput
              //while reading its data probably is almost instant. **/
            }
            else{ ///check how i am going to fix this :)
              addData(userInput)
            }
          }}>
          
          Submit

        </button>

        <button
          className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          
          onClick={()=>{
            writeData(null)
          }}>
            
          Erase ALL Data
        
        </button>


      </div>


      <div id="info_div"
        className="h-2/5 w-11/12 overflow-auto">
        <div className="h-4 m-2 text-center">
          {
          (!hasLoaded)&&<p>Loading ...</p>
          }

          {
            //if we add more properties to fetchedData
            //we need to think about dataEntered being null
            (fetchedData.dataEntered!=null) && <DetailedInfo dataEntered={fetchedData.dataEntered} fetchedDataString={JSON.stringify(fetchedData)}/>
          }

          {
            ((fetchedData.dataEntered==null)&&hasLoaded)&&<p>There is currently no data...</p>
          }
        </div>
      </div>



    </div>
    </>
  )


}


'use client'

//imports

      
      //useState,useRef
      import { useState,useRef } from "react"
      
      
      
      ///rewriting page.tsx(old) from scratch because
      ///I couldn't correct it by changing parts..
      
      ///importing firebase libraries
      
      //getting the database config
      import {database} from "../../../components/firebaseConfig"
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

//

///App Function
export default function DataBaseFetch(){


  

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

    //not sure if async is needed here as "onValue" might be an async function
   

       //At first I thought this was not needed,
       //but as the app constantly listens for new changes
       //if we delete the data, then the app continues thinking
       //that there is data

  const stopLoop=true
  
  useEffect(()=>{
    //after some time of trying to make this work any other way
    //I realized that onValue constantly listens somehow for events 
    //even if we make the re-render dependency of this useEffect
    //impossible to happen, onValue somehow manages to get it to re render the page
    // it may be my lack of knoweledge of how onValue works
    // tho I've spent some time trying different setups
    // for now I am going to leave the code like that,
    // as it seems to be working efficiently...
    //
    console.log("reload..2")
    
    const dataReference = ref(database,'users/'); //added because of
    const fetchedNull={ //React Hook useEffect has missing dependencies: 'dataReference' and 'fetchedNull'.
      dataEntered:null  // Either include them or remove the dependency array
    };

    return onValue (ref(database,'users/'),  (snapshot) => { 
      // return the unsubscriber https://stackoverflow.com/questions/71008942/mix-useeffect-and-firebases-onvalue 
      //if we don't use return, code below gets executed twice
      console.log("reload..1")
      
      const data =  snapshot.val() //value of updated database.
 
      if (data != null) {
        setFetchedData(data)
 
       }
      else {
        setFetchedData(fetchedNull) 
          //At first I thought this was not needed,
          //but as the app constantly listens for new changes
          //if we delete the data, then the app continues thinking
          //that there is data
      }
      setHasLoaded(true)

    })
 

    //
    

  },[stopLoop]) //added a stopLoop instead of hasLoaded which uses State.
  //we get one console.log less this way:D
  
  //hasLoaded is not needed here I believe, but it stops infinite page rerenders. 
  //will remove when I find another workaround


  ///writing data - this works similarly to a react setState()??
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

  ///testing code
  ///added useRef() to the input "onChange", that way I think we get less re-renders
  const inputRef = useRef(); //default value=null
  const handleInputChange = (event:any) =>{
    inputRef.current = (event.target.value)
  }
  //I also wanted to make it so that the input box's
  //values were cleared up after pressing a button but
  //can't think of an easy way rn.




  /////////////
  ///JSX below





  ///Main App JSX
  return(
    <>
      <div id="page_div"
      className="h-screen flex flex-col justify-center items-center dark:bg-gradient-to-t dark:from-gray-900 dark:to-neutral-900">
        
        <div id="instruction_div">
          <p>Add values to &quot;dataEntered&quot;:</p>
          
        </div>


        <div id="input_div">

          <input 
            className="rounded-md "
            onChange={(e)=>{handleInputChange(e)}}
              //needed so that we store the userInput 
              //in some variable.
              //useRef() for less re-renders.
          />
        
        </div>
            
        <div id="button_div">


          <button 
            className="dark:bg-neutral-800 dark:border-l-cyan-700 dark:border-t-teal-700  border-b-0 border-r-0 m-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
            

              onClick={()=>{


                if ((fetchedData.dataEntered==null)){
  //used for debugging:D                  console.log("1")
                  if(inputRef.current!=null){

                    //check if inputValue is just spaces
                    if(([inputRef.current].toString()).replace(/\s/g,"").length!==0){
                      //https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces

                      
                      writeData([inputRef.current])
                      
                    }
                  } /**
                  //I initially thought that "here we can put either userInput or submitInput" 
                  //BUT I was wrong
                  //as I realized that this way it doesn't get updated on the database
                //unless you pressed the button twice
                //this might be due to some delay that accompanies setting SubmitInput
                //while reading its data probably is almost instant. **/
              }
              else{ ///check how i am going to fix this :)
                
                if(inputRef.current!=null){


                  if(([inputRef.current].toString()).replace(/\s/g,"").length!==0){ //check if input is blank (only spaces)
                
                    //i tried using useState, but Submit wasn't working on first click
                    // (it need more). Also I am tired so I wont try to find a way to
                    // store all of this expression in a variable or smth
                    
                    addData(inputRef.current)
                  }

                }
              }
              }}>
            
            Submit

          </button>

          <button
            className="dark:bg-neutral-800 dark:border-l-cyan-700 dark:border-t-teal-700 border-b-0 border-r-0 m-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
            
            onClick={()=>{
              writeData(null)
            }}>
              
            Erase ALL Data
          
          </button>


        </div>


        <div id="info_div"
          className="max-h-96 w-11/12 m-2 text-center max-w-xl overflow-auto  ">
            {
            (!hasLoaded)&&<p>Loading Info...</p>
            }

            {
              (hasLoaded&&(fetchedData.dataEntered==null))&&<p>There is currently no data...</p>
            }

            {
              //if we add more properties to fetchedData
              //we need to think about dataEntered being null
              (hasLoaded&&(fetchedData.dataEntered!=null)) && <DetailedInfo dataEntered={fetchedData.dataEntered} fetchedDataString={JSON.stringify(fetchedData)}/>
            }

        </div>



      </div>
    </>
  )


}


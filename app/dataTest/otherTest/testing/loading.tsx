
export default function Screen(){
  return(
    <>

      <div 
        className="h-screen flex flex-col justify-center items-center">
      
      
        <div>

          <p>Add values to dataEntered:</p>
          
        </div>


        <div>

          <input 
            //value="" //prevent users from typing while loading
            readOnly={true}
            className="rounded-md "/>
        
        </div>


        <div>


          <button 
            className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          >
            
            Submit

          </button>

          <button
            className="mt-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          >
              
            Erase ALL Data
          
          </button>


        </div>


        <div className="h-2/5 w-11/12 overflow-auto">
          <div className="h-4 m-2 text-center">

            <p>Loading Info...</p>
        
          </div>
        </div>


      </div>


    </>
  )}
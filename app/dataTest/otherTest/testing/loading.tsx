
export default function Screen(){
  return(
    <>

    <div id="page_div"
      className="h-screen overflow-auto dark:bg-gradient-to-t dark:from-gray-900 dark:to-neutral-900">
      <div className=" p-20  flex flex-col justify-center items-center ">

        <div id="instruction_div">
          <p>Add values to &quot;dataEntered&quot;:</p>
        </div>


        <div>

          <input 
            //value="" //prevent users from typing while loading
            readOnly={true}
            className="rounded-md "/>
        
        </div>


        <div>


          <button 
            className="dark:bg-neutral-800 dark:border-l-cyan-700 dark:border-t-teal-700  border-b-0 border-r-0 m-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
          >
            
            Submit

          </button>

          <button
            className="dark:bg-neutral-800 dark:border-l-cyan-700 dark:border-t-teal-700  border-b-0 border-r-0 m-2 bg-slate-200 rounded-md p-1 border-2 border-l-4 border-l-teal-200 border-t-teal-200 shadow-lg"
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
    </div>


    </>
  )}
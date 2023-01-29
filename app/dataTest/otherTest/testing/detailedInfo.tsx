//server side rendering for getInfo



/// https://bobbyhadz.com/blog/react-typescript-pass-object-as-props
interface dataTypesInterface{
  dataEntered:string[];
  fetchedDataString:string
}


export default function DetailedInfo(props:dataTypesInterface){
  return( ///just to avoid the Warning: possibly null
      <>
      <div className="break-words  grid grid-cols-2 gap-4 font-extralight  ">
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-10 p-2 shadow-lg  ">
          <p>
            Last database insertion was:<br/> &apos;{(props.dataEntered[props.dataEntered.length-1])}&apos;
          </p>
        </div>
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-10 p-2 shadow-lg ">
         <p>
            The dataEntered property stores:<br/>{props.dataEntered.length} value(s)
          </p>
        </div>
        <div className="   border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-10  shadow-lg  p-2">
          <p>
            All database entries:<br/> 
          </p>
            <div className="">
              {(props.fetchedDataString)}

          </div>
        </div>
        <div className=" border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-10 shadow-lg  p-2">
          <p>
            dataEntered entries:<br/> 
          </p>
          <div className="  ">
            {JSON.stringify(props.dataEntered)}

          </div>
        </div>


      </div>
      </>
    )
}
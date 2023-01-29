//server side rendering for getInfo



/// https://bobbyhadz.com/blog/react-typescript-pass-object-as-props
interface dataTypesInterface{
  dataEntered:string[];
  fetchedDataString:string
}


export default function DetailedInfo(props:dataTypesInterface){
  return( ///just to avoid the Warning: possibly null
      <>
      <div className="grid grid-cols-2 gap-4 font-extralight">
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-20 p-2 shadow-lg h-auto overflow-auto">
          <p>
            Last database insertion was:<br/> &apos;{(props.dataEntered[props.dataEntered.length-1])}&apos;
          </p>
        </div>
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-20 p-2 shadow-lg h-auto overflow-auto">
         <p>
            The dataEntered property stores:<br/>{props.dataEntered.length} value(s)
          </p>
        </div>
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-20 p-2 shadow-lg h-auto overflow-auto flex flex-col justify-center items-center p-2">
          <p>
            All database entries:<br/> 
          </p>
            <div className="max-w-full h-40 break-words p-2">
              {(props.fetchedDataString)}

          </div>
        </div>
        <div className="border-l-8 border-t-4 border-black dark:border-violet-900 rounded-r-lg rounded-b-lg bg-white bg-opacity-50 dark:bg-sky-100 dark:bg-opacity-20 p-2 shadow-lg h-auto overflow-auto flex flex-col justify-center items-center p-2">
          <p>
            dataEntered entries:<br/> 
          </p>
          <div className="max-w-full h-40 break-words p-2">
            {JSON.stringify(props.dataEntered)}

          </div>
        </div>


      </div>
      </>
    )
}
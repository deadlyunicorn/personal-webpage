import SubmitButton from "./submitFunc";
import Link from "next/link"

export default function WriteDat(){
  return(
    <>
    <div className="bg-opacity-0 absolute">
      <Link href='/..'  target="_self"><h3>Go back..</h3></Link>
    </div>

    <div className="h-screen flex flex-col  items-center justify-center bg-gradient-to-b from-blue-100 to-red-100">
      <div>
        <SubmitButton/>
      </div>
      <div>
        
      </div>
    </div>
    </>
  )
}

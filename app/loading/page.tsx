import Image from "next/image"
export default function Screen(){
  return(
    <>
      <div className="h-screen absolute w-screen bg-gradient-to-b from-neutral-800 to-neutral-700 z-10 flex flex-col justify-center items-center ">
        <div className="flex flex-row hover:flex-col items-center">

          <Image alt=""  src="/loading_centered.svg" width="64" height="64" className="animate-spin  w-48 h-48" />
          <div className="text-blue-200 animate-pulse text-3xl"> Loading.. </div>
          <Image alt=""  src="/loading_centered_single_centered.svg" width="64" height="64" className="animate-spin  w-48 h-48" />
          
        </div>

      </div>

    </>
  )}
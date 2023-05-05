import Image from "next/image"
export default function Screen(){
  return(
    <div 
      className="
      h-screen w-screen
      fixed z-10 
      bg-gradient-to-b from-neutral-800 to-neutral-700
      flex flex-col justify-center items-center">

          <Image alt=""  src="/loading_centered.svg" width="64" height="64" className="animate-spin w-48 h-48 overflow-hidden" />
          <div className="text-blue-200 animate-pulse text-3xl"> Loading.. </div>
          

    </div>
  )}
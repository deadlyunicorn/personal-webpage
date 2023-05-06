import Image from "next/image";

export default function WaterMark(){
  return(
    <Image
      className="
      absolute
      right-0 bottom-8
      hover:-right-9
      duration-1000 w-20 sm:w-48" 
      src="/Yuni_transparent.png" 
      alt="A picture of my unicorn form"
      width={200}
      height={200}>
    </Image>
  )
}
import Image from "next/image";

export default function WaterMark(){
  return(
    <Image
      className="
      absolute  right-0 bottom-8
      hover:-right-9
      duration-1000" 
      src="/Yuni_transparent_withShadow.png" 
      alt="A picture of my unicorn form"
      width={200}
      height={200}>
    </Image>
  )
}
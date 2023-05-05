import WaterMark from "./waterMark";

export default function Footer(){
  return(
  <footer 
  className="
    px-4 pt-4 mt-4  border-t-2
    text-center w-full
    relative">
      {/* we need relative to make the absolute watermark work */}
    <WaterMark/>
    <p>Thank you for visiting my website!</p>

  </footer>
  )
};
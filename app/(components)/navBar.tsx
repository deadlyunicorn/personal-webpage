import Link from "next/link";
import LinkLine from "./linkLine";

export default function NavigationBar(){

  return(
    <div
    id="menu"
    className="
      fixed top-10 sm:left-10 left-4
      max-w-[20px] max-h-5 overflow-hidden
      text-xl p-4
      
      border-white border-2 bg-white rounded-md
      
      sm:text-white 
      sm:hover:text-white hover:text-cyan-300 text-white
      sm:focus:text-white focus:text-cyan-300
      duration-500
      
      sm:hover:bg-opacity-0 
      sm:focus:bg-opacity-0 
      sm:focus-within:bg-opacity-0 
      hover:max-h-40 hover:max-w-[160px]
      focus:max-h-40 focus:max-w-[160px]
      focus-within:max-h-40 focus-within:max-w-[160px]




      flex flex-col justify-evenly z-10
      ">
          <button>  </button>
          <Link href="/" tabIndex={0}>Homepage</Link>
          <Link href="/info" tabIndex={0}>Information</Link>
          <LinkLine href="https://mongodb-social-app.vercel.app/">
            <span className="text-red-100 hover:text-inherit underline">
              Latest
            </span>
          </LinkLine>
          <LinkLine href="https://mongodb-social-app.vercel.app/">
            <span className="text-red-100 hover:text-inherit underline">
              {/* Projects */}
            </span>
          </LinkLine>
        

    </div>
  );
};
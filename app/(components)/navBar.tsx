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
      sm:text-white sm:hover:text-white hover:text-cyan-300 text-white
      duration-500
      sm:hover:bg-opacity-0 hover:max-h-40 hover:max-w-[160px]

      flex flex-col justify-evenly z-10
      ">
          <Link href="/">Homepage</Link>
          <Link href="/info">Information</Link>
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
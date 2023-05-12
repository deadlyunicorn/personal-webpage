import Link from "next/link";
import LinkLine from "./linkLine";

export default function NavigationBar(){

  return(
    <nav
    id="menu"
    className="
      fixed z-10 
      top-10 sm:left-10 left-4
      max-w-[40px] max-h-10 overflow-hidden
      text-xl
      
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
      ">
          <button className="absolute -z-10 w-full h-full">
          </button>

          <div 
            className="
              flex flex-col justify-evenly z-10 p-4">

            <Link href="/" tabIndex={0}>Homepage</Link>
            <Link href="/info" tabIndex={0}>Information</Link>
            <LinkLine href="/resume">Resume</LinkLine>

            <LinkLine href="https://mongodb-social-app.vercel.app/">
              <span className="text-red-100 hover:text-inherit underline">
                {/* focus text doesn't get cyan.. Actually fixed, you added the class to the span... */}
                Latest
              </span>
            </LinkLine>
            <LinkLine href="https://mongodb-social-app.vercel.app/">
              <span className="text-red-100 hover:text-inherit underline">
                {/* Projects */}
              </span>
            </LinkLine>

          </div>

        

    </nav>
  );
};
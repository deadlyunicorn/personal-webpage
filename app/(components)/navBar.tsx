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
      
      sm:text-cyan-600 text-cyan-600
      sm:hover:text-cyan-600 hover:text-cyan-600 
      sm:focus:text-cyan-600 focus:text-cyan-600
      duration-500

      
       
      group
       
      hover:max-h-[400px] hover:max-w-[160px]
      ">
        <div className="
          flex items-center justify-center w-full h-full
          absolute group-hover:hidden rotate-90 text-3xl">III</div>
          <button className="absolute -z-10 w-full h-full">
          </button>

          <div 
            className="
            text-center
              flex flex-col justify-evenly z-10 p-4">

            <Link className="hidden group-hover:inline" href="/" tabIndex={0}>Homepage</Link>
            <Link className="hidden group-hover:inline" href="/info" tabIndex={0}>Information</Link>
            <div className="w-full">
              <LinkLine href="https://cv-job-resume.vercel.app">Resume</LinkLine>
            </div>


            <LinkLine href="https://the-cool-webstore-deadlyunicorn.vercel.app/">
                <span className="w-[100px] text-emerald-600 underline hover:text-inherit">
                  {/* focus text doesn't get cyan.. Actually fixed, you added the class to the span... */}
                  Mock Webstore
                </span>
              </LinkLine>

            <div className="
              min-w-[100px]
              relative h-10 group-hover:inline hidden">
              <div className="absolute bottom-0 right-0 text-xs text-black"> reworking rn..</div>
              <LinkLine href="https://the-amazing-social.vercel.app/">
                <span className=" text-red-600 underline hover:text-inherit">
                  {/* focus text doesn't get cyan.. Actually fixed, you added the class to the span... */}
                  Social App
                </span>
              </LinkLine>
            </div>

            <LinkLine href="https://the-amazing-social.vercel.app/">
              <span className="text-red-600 underline hover:text-inherit">
                {/* Projects */}
              </span>
            </LinkLine>

          </div>

        

    </nav>
  );
};
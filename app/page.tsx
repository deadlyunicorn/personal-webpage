import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import './globals.css'




export default function Homepage() {
  return (
    <div className=" bg-gradient-to-b from-blue-300 to-red-300 h-screen overflow-auto ">
        <div className="p-20  flex flex-col justify-center items-center ">
        <div className="sm:max-w-xs lg:max-w-md max-w-xs">
          
          <div className="text-white drop-shadow-[1px_1px_3px_rgba(200,50,200,1)]  text-4xl hover:animate-pulse animate-bounce  text-center">DeadlyUnicorn</div>
          
          <div className=" shadow-xl rounded-t-md sm:h-56 h-48 overflow-hidden border border-white w-full lg:h-96 "><a href="https://www.linkedin.com/in/Alexandros-Petrache/" target="_blank" rel="noopener noreferrer">
            <Image priority={true} src="/profilePicture_withoutShadow.png" width="500" height="500" alt="My online avatar, a purple unicorn." className="-translate-y-7  scale-125 "/></a>
          </div>
          
          <div 
            className=" border-white border-t border-l  text-center bg-red-100 bg-opacity-50 rounded-b-md shadow-lg flex flex-col   ">

                <div className="font-light p-1 text-black">
                Hi I am Alex! 
                <br/>My nickname is&nbsp;DeadlyUnicorn.
                <br/>I am just testing some stuff here. 
                <br/>Feel&nbsp;free to 
                explore this project, ask me any questions 
                and&nbsp;
                  <a 
                    href="https://www.linkedin.com/in/Alexandros-Petrache/" 
                    target="_blank" rel="noopener noreferrer" 
                    className=" text-blue-600 hover:text-blue-400 focus-within:text-rose-600 hover:underline">
                      connect
                  </a> 
                  &nbsp;with&nbsp;me.
                  <ul>

                  <ListItem link="https://github.com/deadly-unicorn/">
                    <div className='flex justify-center hover:-translate-x-2 duration-500'>

                    <div
                      className="
                      drop-shadow-[0px_-0.3px_1.4px_rgba(0,0,0,1)]
                      bg-zinc-800 p-1 rounded-lg  ">
                        <div className="drop-shadow-[1.2px_1.3px_0.9px_rgba(0,0,0,1)] 
                      text-slate-300 font-bold text-lg flex w-max
                      ">
                          
                          Github&nbsp;
                        <svg className='fill-slate-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                    </div>
                    </div>
                  </ListItem>
                  </ul>
                </div>
                <div className="border-t border-black m-2 text-black flex flex-col ">
                  <p className="p-1 font-semibold "> BIO</p>  
                  <p className="font-light">I am a Web developer.</p>
                  <p className="font-light">Currently I am working&nbsp;with:</p>
                  
                    
                    
                    <ol className="max-h-fit text-left mt-2 flex flex-col min-h-[60px]">
                      
                      <ListItem link="https://nextjs.org">
                        <span 
                          className="
                          drop-shadow-[0px_-0.3px_1.4px_rgba(0,0,0,1)]
                          bg-zinc-900 p-1 rounded-lg">
                            <span className="drop-shadow-[1.2px_1.3px_0.9px_rgba(0,0,0,1)] 
                          text-slate-300 font-bold text-lg">
                              NextJS
                            </span>
                        </span>
                      </ListItem>


                      <ListItem link="https://www.mongodb.com">
                        <span
                          className="
                          font-bold
                          text-green-400
                          drop-shadow-[0px_-0.3px_1.4px_rgba(19,78,74,1)]
                          
                          bg-teal-900 p-1 rounded-lg">
                          
                          <span className="drop-shadow-[0.7px_1px_0.9px_rgba(0,23,36,1)] text-lg">
                          MongoDB
                          </span>
                        </span>
                      </ListItem>

                      <ListItem link="https://tailwindcss.com">
                        <span 
                          className="drop-shadow-[0px_-0.3px_1.4px_rgba(34,211,238,1)]  text-white font-bold text-lg 
                          bg-cyan-400 p-1 rounded-lg">
                            TailwindCSS
                        </span>
                      </ListItem>

                      <ListItem link="https://www.framer.com/motion/">
                        <span
                        className="text-lg text-white
                        drop-shadow-[0px_-1px_1.4px_rgba(232,121,249,1)] 
                        bg-zinc-900 p-1 rounded-lg">
                          Framer <span className="text-fuchsia-400">Motion</span>
                        </span>
                      </ListItem>
                    </ol>
                    <p className="font-light">
                      I am also interested&nbsp;in:</p>
                  
                    <ol className='max-h-fit text-left mt-2 flex flex-col min-h-[60px]'>
                      <ListItem link="https://svelte.dev">
                        <span 
                        className="drop-shadow-[0px_-0.3px_1.4px_rgba(255,60,60,1)]  text-white font-bold text-lg 
                        bg-orange-500 p-1 rounded-lg">
                          Svelte
                        </span>
                      </ListItem>



                      <ListItem link="https://reactnative.dev">
                          <span 
                            className=" drop-shadow-[0px_-0.3px_1.4px_rgba(255,255,255,1)]  text-blue-300 hover:text-cyan-300 font-semibold text-lg 
                            bg-neutral-900 p-1 rounded-lg">
                            ReactNative
                          </span>
                      </ListItem>

                      </ol>
                      </div>
                      <div className="border-t border-black m-2 text-black flex justify-around">
                        <a className="text-lg text-blue-600 hover:text-blue-400 focus-within:text-rose-600 hover:underline w-fit" href="./experience">
                          Experience
                        </a>
                        <span>·</span>
                        <Link 
                          className="text-lg text-red-500 hover:text-red-400 focus-within:text-rose-600 hover:underline w-fit"
                          target="_blank" rel="noopener noreferrer"
                          href="https://mongodb-social-app.vercel.app/">
                          →Latest←
                        </Link>
                      </div>

           </div>
           </div>
        </div>

      
    </div>
  )
}



//{children}:{children:ReactNode}
//children belongs on props?
//so using props again makes it show an error?
//props:{link:string},{children}:{reactNode} => gives error.


const ListItem = (props:{link:string,children:ReactNode}) => {
  return (
  <li className="ml-2 my-2 hover:translate-x-2 hover:duration-700 duration-700">
      <a 
        href={props.link}
        target="_blank" rel="noopener noreferrer">
          {props.children}
      </a>
    </li>
  )
}

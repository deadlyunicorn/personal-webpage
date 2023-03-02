import Image from 'next/image'
import { ReactNode } from 'react'
import './globals.css'



export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-blue-300 to-red-300 h-screen overflow-auto ">
        <div className="p-20  flex flex-col justify-center items-center ">
        <div className="sm:max-w-xs lg:max-w-md max-w-xs">
          
          <div className="text-white drop-shadow-[1px_1px_3px_rgba(200,50,200,1)]  text-4xl hover:animate-pulse animate-bounce  text-center">DeadlyUnicorn</div>
          
          <div className=" shadow-xl rounded-t-md sm:h-56 h-48 overflow-hidden border border-white w-full lg:h-96 "><a href="https://www.linkedin.com/in/Alexandros-Petrache/" target="_blank" rel="noopener noreferrer">
            <Image src="/profilePicture_withShadow.png" width="500" height="500" alt="My online avatar, a purple unicorn." className="md:-translate-y-14  -translate-y-12 "/></a>
          </div>
          
          <div 
            className=" border-white border-t border-l  text-center bg-red-100 bg-opacity-50 rounded-b-md shadow-lg flex flex-col   ">

                <div className="font-light p-1 text-black">

                Just testing some stuff here. Feel&nbsp;free to explore this project, ask me any questions and&nbsp;
                  <a 
                    href="https://www.linkedin.com/in/Alexandros-Petrache/" 
                    target="_blank" rel="noopener noreferrer" 
                    className=" text-blue-600 hover:text-blue-400 focus-within:text-rose-600 hover:underline">
                      connect
                  </a> 
                  &nbsp;with&nbsp;me.
                </div>
                <div className="border-t border-black m-2 text-black flex flex-col ">
                  <p className="p-1 font-semibold "> BIO</p>  
                  <p className="font-light">I am a Web developer.</p>
                  <p className="font-light">Currently I am interested&nbsp;in:</p>
                  
                    
                    
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

                      <ListItem link="https://www.framer.com/motion/">
                        <span
                        className="text-lg text-white
                        drop-shadow-[0px_-1px_1.4px_rgba(232,121,249,1)] 
                        bg-zinc-900 p-1 rounded-lg">
                          Framer <span className="text-fuchsia-400">Motion</span>
                        </span>
                      </ListItem>

                      <ListItem link="https://svelte.dev">
                        <span 
                        className="drop-shadow-[0px_-0.3px_1.4px_rgba(255,60,60,1)]  text-white font-bold text-lg 
                        bg-orange-500 p-1 rounded-lg">
                          Svelte
                        </span>
                      </ListItem>

                      <ListItem link="https://tailwindcss.com">
                        <span 
                          className="drop-shadow-[0px_-0.3px_1.4px_rgba(34,211,238,1)]  text-white font-bold text-lg 
                          bg-cyan-400 p-1 rounded-lg">
                            TailwindCSS
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
                      <div className="border-t border-black m-2 text-black flex justify-center ">
                        <a className="text-xl text-blue-600 hover:text-blue-400 focus-within:text-rose-600 hover:underline w-fit" href="./experience">
                          Experience
                        </a>
                      </div>
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

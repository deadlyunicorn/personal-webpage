import Image from 'next/image'


export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-300 to-red-300 overflow-hidden">
      <div className=" h-screen flex flex-col justify-center items-center ">
        <div className="text-white drop-shadow-[1px_1px_3px_rgba(200,50,200,1)] sm:text-[3vh] md:text-[5vh] md:pb-3 text-[2vh] hover:animate-pulse animate-bounce">DeadlyUnicorn</div>
        <div className=" max-w-md w-3/6 shadow-xl rounded-t-md sm:h-72 overflow-hidden "><a href="https://www.linkedin.com/in/Alexandros-Petrache/" target="_blank" rel="noopener noreferrer"><Image src="/profilePicture_withShadow.png" width="500" height="500" alt="My online avatar, a purple unicorn." className="sm:-translate-y-12  "/></a></div>
        <div 
          className="border-white border-t border-l max-w-md w-3/6 text-center bg-red-100 bg-opacity-50 rounded-b-md py-2 shadow-lg">
              <div className="font-light p-1">

              Just testing some stuff here. Feel&nbsp;free to explore this project, ask me any questions and&nbsp;
                <a 
                  href="https://www.linkedin.com/in/Alexandros-Petrache/" 
                  target="_blank" rel="noopener noreferrer" 
                  className=" text-blue-600 hover:text-blue-400 focus-within:text-rose-600 focus:"><button className="hover:underline ">
                    connect
                </button></a> 
                &nbsp;with&nbsp;me.
              </div>
              <div className="border-t border-black m-2">
                <p className="p-1 font-semibold "> BIO</p>  
                <p className="font-light">I am a Web developer.</p>
                <p className="font-light">Currently I am interested&nbsp;in:</p>
                <ol className="list-disc list-inside text-left mt-2">
                  <li>
                    <a 
                      href="https://nextjs.org"
                      target="_blank" rel="noopener noreferrer">
                        
                      <button>
                        <span 
                          className="p-1 drop-shadow-[-1px_1.3px_1.5px_rgba(0,0,0,1)]  text-slate-200 gradient font-bold text-lg">
                            NextJS
                        </span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a 
                      href="https://svelte.dev"
                      target="_blank" rel="noopener noreferrer">
                      <button>
                        <span 
                        className="p-1 drop-shadow-[-1px_1.3px_2px_rgba(255,60,60,1)]  text-white font-bold text-lg">Svelte
                        </span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a 
                      href="https://tailwindcss.com"
                      target="_blank" rel="noopener noreferrer">
                      <button>
                        <span 
                        className="p-1 drop-shadow-[-1px_1.3px_1.6px_rgba(40,90,155,1)]  text-white font-bold text-lg">TailwindCSS
                        </span>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://reactnative.dev"
                      target="_blank" rel="noopener noreferrer">
                      <button>
                        <span 
                        className="drop-shadow-[0px_-0.3px_1.4px_rgba(0,0,0,1)]">
                          <span 
                            className="p-1 drop-shadow-[-0.9px_-0.6px_0.4px_rgba(255,255,255,1)]  text-blue-300 hover:text-cyan-300 font-semibold text-lg ">
                              ReactNative
                          </span>
                        </span>
                      </button>
                    </a>
                  </li>
                </ol>
              </div>
                  
        </div>
      
      </div>
    </div>
  )
}

import Link from "next/link"
export default function NavBar(){

  return(<nav className='absolute bg-neutral-900 w-screen rounded-b-sm shadow-md sm:h-11 h-16 max-h-screen '>
<div className='p-2 flex items-center justify-around h-full'>
  <div className=' sm:border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/"}><button>Homepage <span className="hidden sm:inline">🏠</span></button></Link> </div>
  <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/dataTest"}><button>DataTest</button></Link> </div>
  <div className='sm:border-x border-r border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/dataTest/otherTest"}><button>OtherTest</button></Link> </div>
  <div className='group'>
      <div className=' sm:border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/"}><button>Testing <span className="hidden sm:inline"> 🔥</span></button></Link> </div>
        {/* 2 divs above we use group and also below we set default to invisible, not hidden */}
      <div className='group-hover:visible group-focus-within:visible  hover:visible invisible absolute bg-neutral-900  rounded-md pt-2 w-auto overflow-hidden'>
        <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 border-t py-1 '><Link href={"/dataTest/otherTest/testing"}><button className='w-full text-left'>Testing1<span className='text-[1vh]'>🔥🔥</span></button></Link> </div>
        <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 border-t py-1  rounded-b-md'><Link href={"/dataTest/otherTest/testing2"}><button className='w-full text-left'>Testing2</button></Link> </div>
      </div>
  </div>
</div>
</nav>)
}
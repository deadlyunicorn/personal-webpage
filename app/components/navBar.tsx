import Link from "next/link"
export default function NavBar(){

  return(<nav className='absolute bg-neutral-900 w-screen rounded-b-sm shadow-md  '>
<div className='p-2 flex justify-around '>
  <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/"}><button>Homepage🏠</button></Link> </div>
  <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/dataTest"}><button>DataTest</button></Link> </div>
  <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/dataTest/otherTest"}><button>OtherTest</button></Link> </div>
  <div className='group'>
      <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 '><Link href={"/"}><button>Testing🔥</button></Link> </div>
        {/* 2 divs above we use group and also below we set default to invisible, not hidden */}
      <div className='group-hover:visible group-focus-within:visible  hover:visible invisible absolute bg-neutral-900  rounded-md pt-2 w-full overflow-hidden'>
        <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 border-t py-1 '><Link href={"/dataTest/otherTest/testing"}><button className='w-full text-left'>Testing1<span className='text-[1vh]'>🔥🔥</span></button></Link> </div>
        <div className='border-x border-slate-700 hover:border-slate-500 px-2 sm:text-[2vh] font-light font-sans text-cyan-300  focus-within:text-red-200 hover:text-cyan-200 border-t py-1  rounded-b-md'><Link href={"/dataTest/otherTest/testing2"}><button className='w-full text-left'>Testing2</button></Link> </div>
      </div>
  </div>
</div>
</nav>)
}
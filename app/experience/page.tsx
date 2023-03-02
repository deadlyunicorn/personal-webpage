'use client'

import { ReactNode, useState } from "react";

const ExperienceSection = () =>(
  <>
      <div className=" bg-gradient-to-b from-blue-300 to-red-300 h-full w-full overflow-auto -z-20 absolute">
        <div className="p-20  flex flex-col justify-center items-center ">
          <div className="sm:max-w-xs lg:max-w-md max-w-sm">

            <div className="text-white drop-shadow-[1px_1px_3px_rgba(30,140,180,1)]  text-4xl hover:animate-pulse animate-bounce  text-center">
              Experience
            </div>
            <div 
              className=" border-white w-fit border-t border-l  bg-red-800 bg-opacity-10 rounded-b-md shadow-lg flex flex-col  text-center pb-4 ">
            <Background/>
            <Studies/>
            <FirstSemester/>
            <SecondSemester/>
            <Links/>
            </div>



          </div>
        </div>
      </div>
  </>
)

const date = new Date();


const NewSection=(props:{children:ReactNode,title:string})=>{
  const [sectionSwitch,toggleSwitch]=useState(false);
  return(
  <>

    <div className="font-bold text-xl underline my-2 flex w-80 pl-2 ">

      <button
      className="
      drop-shadow-[1px_1px_1px_rgba(100,200,100,1)]
      text-yellow-300 underline hover:text-yellow-200 text-2xl"   
      onClick={()=>{toggleSwitch(!sectionSwitch)}}>
        
        {props.title}
      
      </button>
    
    <div className="ml-2  flex justify-start items-center translate-y-1">
      <svg data-switch={sectionSwitch} className="h-3 w-3 rotate-90 duration-500 data-[switch=true]:duration-1000 data-[switch=true]:rotate-180" viewBox="0 0 78 67.7"><g transform="translate(-65.96,-114.6)"><path fill="#000000" d="m 141.4,160.9 -39.0,0 -39,0 19.5,-33.8 19.5,-33.8 19.5,33.8 z" transform="translate(2.63,21.36)" /><path fill="#ffffff" d="m 141.40382,160.94655 -39.03107,0 -39,0 19.5,-33.8 19.5,-33.8 19.5,33.8 z" transform="matrix(0.75,0,0,0.96,28.15,25.2)" /></g></svg>
    </div>
    

    </div>
    <div 
    data-switch={sectionSwitch}
    className="
    drop-shadow-[1px_1px_1px_rgba(50,50,50,0.2)]
    h-0 -z-10
    data-[switch=true]:z-0 data-[switch=true]:h-fit px-2">

      <div data-switch={sectionSwitch} 
      className="-translate-x-40   opacity-0 duration-500 
      data-[switch=true]:translate-x-0  
      data-[switch=true]:opacity-100 
      data-[switch=true]:duration-1000 
      text-white text-base font-semibold
      drop-shadow-[-0.7px_1px_0.71px_rgba(50,50,50,1)]
      "
      >
        {props.children}
     
      </div>

    </div>
  </>

    )
}

const Background = () => {
  
  return(
  <>
    <NewSection title="Background">
      I started <b>Web Developing</b> in May&nbsp;2022.
      <br/>I&apos;ve been using <b>HTML, CSS, JavaScript</b> for <b>{date.getFullYear()-2022}&nbsp;year(s).</b>
      <br/><br/>I&apos;ve been fascinated by the <em>Internet</em> <b>since a young age.</b>
      <br/>New <em>technologies</em> was always a reason to get me <b>excited and curious.</b>
      <br/>Having access to a personal computer <em>for&nbsp;years</em> has made using one a <b>second&nbsp;nature</b> to me.
      <br/><br/>The <em>first contact</em> I had with programming was with <b>Python</b>, back <em>in Elementary&nbsp;school</em>, out of my own curiousity. 
      <br/>I have been using <em><b>Linux</b> Distributions</em> as my <em>primary OS</em>, since then as well. 
      <br/><br/>Despite following another fields during my high school years, it didn&apos;t take me long to realize
      <br/>that I want to devote <em>the rest of my life</em> to something that <em>gives me the ability <b>to&nbsp;create</b></em> with infinite posibilities,
      <br/><em><b><u><div className="hover:rotate-[420deg] hover:duration-1000 duration-1000 hover:translate-x-60">programming.</div></u></b></em> 
    </NewSection>
    <hr className="my-1"/>

  </>

)}

const Studies = () =>(
  <>
    <NewSection title="Studies">
      In October 2022 I&apos;d <b>started studying</b> on the specialty of 
      <br/>&quot;<b><em>Informatics&nbsp;Applications&nbsp;Technician</em></b>&quot; 
      <br/>at the Public Vocational School of Peristeri, Athens.
    </NewSection>
    <hr className="my-1"/>

  </>
)

const FirstSemester = ()=>(
    <>
      <NewSection title="First Semester">
        <u>Oct. - Feb. 2022-23</u>
        <br/>I&apos;ve been taught some basics in <b>C&nbsp;programming&nbsp;language.</b>
        <br/>I&apos;ve been taught to a great extent using <b>Microsoft&nbsp;Office.</b>
        <br/>I&apos;ve practiced <b>Linux&nbsp;bash&nbsp;commands.</b>
      </NewSection>
      <hr className="my-1"/>

    </>
)

const SecondSemester = ()=>(
  <>
    <NewSection title="Second Semester">
      <u>Feb. - June 2023</u>
      <br/>I&apos;ve been taught the <b>C++&nbsp;programming&nbsp;language.</b>
      <br/>I&apos;ve been taught the <b>Python&nbsp;programming&nbsp;language.</b>
      <br/>I&apos;ve practiced some basic <b>SQL.</b>
      <br/>I&apos;ve been taught some basics of <b>Web&nbsp;Development.</b>
    </NewSection>
    <hr className="my-1"/>

  </>
)

const Links = () => (
  <>
    <NewSection title="Links">
      <div className="flex flex-col text-left pl-2">
        <LinkLine title="LinkedIn" href="https://www.linkedin.com/in/Alexandros-Petrache/"/>
        <LinkLine title="GitHub" href="https://github.com/deadly-unicorn"/>
        <LinkLine title="Twitter" href="https://twitter.com/deadlyunicorn_"/>
        <LinkLine title="Personal Website" href="https://www.deadlyunicorn.art"/>
      </div>
    </NewSection>
  </>
)

const LinkLine = (props:{href:string,title:string}) => (
  <a 
   href={props.href}
  target="_blank" rel="noopener noreferrer" 
  className=" text-lg font-semibold font-sans
  w-fit text-indigo-200 hover:text-red-200 focus-within:text-rose-200 hover:underline">
    {props.title}
  </a> 
)

export default ExperienceSection
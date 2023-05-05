import { ReactNode } from "react";
import LinkLine from "../(components)/linkLine";
import NewSection from "./sectionComponent";

const ExperienceSection = () =>(

        <div 
          className="
          sm:max-w-sm lg:max-w-md max-w-xs 
          flex flex-col items-center 
          my-10 ">

            <div className="
              text-white drop-shadow-[1px_1px_3px_rgba(30,140,180,1)] 
              customBounce p-2
              text-4xl text-center">
              Information
            </div>
            <div
              id="experience" 
              className=" 
                border-white border-t border-l
                bg-red-400 bg-opacity-10 
                rounded-b-md shadow-lg flex flex-col text-center pb-2 ">
              
              {/* Life Background */}
              <Background/> 
              <Studies>
                <FirstSemester/>
                <SecondSemester/>
              </Studies>

              <Links/>
            </div>
        </div>
)

const date = new Date();




const Background = () => {
  
  return(
  <>
    <NewSection title="Background">
      I started <b>Web Developing</b> in May&nbsp;2022.
      <br/>I&apos;ve been using <b>HTML, CSS, JavaScript</b> for over&nbsp;<b>{date.getFullYear()-2022}&nbsp;year(s).</b>
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

const Studies = ({children}:{children:ReactNode}) =>(
  <>
    <NewSection title="Studies">
      In October 2022 I&apos;d <b>started studying</b> on the specialty of 
      <br/>&quot;<b><em>Informatics&nbsp;Applications&nbsp;Technician</em></b>&quot; 
      <br/>at the Public Vocational School of Peristeri, Athens.
      {children}
    </NewSection>
    <hr className="my-1"/>

  </>
)

const FirstSemester = ()=>(
    <>
      <NewSection title="First Semester">
        <u>Oct. - Feb. 2022-23</u>
        <br/>I&apos;ve been taught some basics in <b>C&nbsp;programming&nbsp;language.</b>
        <br/>I&apos;ve been taught to a great extent <b>Microsoft&nbsp;Office tools.</b>
        <br/>I&apos;ve practiced <b>Linux&nbsp;bash&nbsp;commands.</b>
      </NewSection>
      <hr className="my-1"/>

    </>
)

const SecondSemester = ()=>(
  <>
    <NewSection title="Second Semester">
      <u>Feb. - June 2023</u>
      <br/>We&apos;ve been taught the <b>C++&nbsp;programming&nbsp;language</b> fundamentals in depth.
      <br/>We&apos;ve overviewed the <b>Python&nbsp;programming&nbsp;language </b> and got some taste of a <b>CMS</b> (Webnode).
      <br/>We&apos;ve practiced some basic <b>SQL.</b>
      <br/>We&apos;ve overviewed some core concepts of <b>HTML5&nbsp;and CSS.</b>
    </NewSection>
    <hr className="my-1"/>

  </>
)

const Links = () => (
  <>
    <NewSection title="Links">
      <div 
        className="
        flex flex-col text-left pl-2
        text-lg font-semibold font-sans
      focus-within:text-rose-200"
        id="infoPage_Links"
      >
        <LinkLine href="https://github.com/deadly-unicorn">
          GitHub
        </LinkLine>
        <LinkLine href="https://www.linkedin.com/in/Alexandros-Petrache/">
          LinkedIn
        </LinkLine>
        <LinkLine href="https://twitter.com/deadlyunicorn_">
          Twitter
        </LinkLine>
        <LinkLine href="https://www.deadlyunicorn.dev">
        Personal Website
        </LinkLine>
      </div>
    </NewSection>
  </>
)



export default ExperienceSection
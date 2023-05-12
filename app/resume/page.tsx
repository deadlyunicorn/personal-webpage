import NavigationBar from "../(components)/navBar";

export default function Resume(){


  return(

    <div className="h-fit w-full">

      
      <NavigationBar/>
      <iframe src="https://cv-job-resume.vercel.app" className="h-full w-full min-h-screen"/>
      
     

    </div>
  )
}
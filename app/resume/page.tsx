import NavigationBar from "../(components)/navBar";
import Alert from "./alert";

export default function Resume(){


  return(

    <div className="h-fit w-full">
      <Alert/>
      <iframe src="https://cv-job-resume.vercel.app" className="h-full w-full min-h-screen"/>
    </div>
  )
}
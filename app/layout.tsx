import Footer from './(components)/footer'
import NavigationBar from './(components)/navBar'
import './globals.css'




export const metadata = {
  title: 'DeadlyUnicorn Software Developer',
  description: 'This is the official website of Alexander Petrache, also known as DeadlyUnicorn. I am a Web Developer.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Yuni.jpg"/>
      </head>
   
      <body 
      className="
      bg-gradient-to-b from-blue-300 to-red-300
      w-full min-h-screen h-full 
      flex flex-col justify-between items-center
      -z-20
      font-light text-slate-800">
          <NavigationBar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}

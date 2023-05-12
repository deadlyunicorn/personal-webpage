import '@/app/globals.css'
import NavigationBar from '../(components)/navBar'

export const metadata = {
  title: 'CV Alexander Petrache',
  description: 'This is the resume of Alexander Petrache.',
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
      w-full min-h-screen
      overflow-y-hidden
      -z-20 ">
          {children}
      </body>
    </html>
  )
}

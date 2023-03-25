import './globals.css'
import { AnalyticsWrapper } from '@/app/components/analytics';
import NavBar from '@/app/components/navBar';


export const metadata = {
  title: 'DeadlyUnicorn',
  description: 'This is my personal webpage!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="icon" href="/profilePicture_withShadow.png"/>
      </head>
   
      <body>
          <NavBar/>
        {children}
        <AnalyticsWrapper/>  
      </body>
    </html>
  )
}

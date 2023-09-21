import Link from "next/link";
import { ReactNode } from "react";

const LinkLine = ({href,children}:{href:string,children:ReactNode}) => (
  <Link
  className="w-fit hidden group-hover:inline"
  href={href}
  target="_blank" rel="noopener noreferrer"
  tabIndex={0}>
    
    {children}
  </Link> 
)

export default LinkLine;
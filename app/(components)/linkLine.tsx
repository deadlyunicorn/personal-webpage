import Link from "next/link";
import { ReactNode } from "react";

const LinkLine = ({href,children}:{href:string,children:ReactNode}) => (
  <Link
  className="w-fit"
  href={href}
  target="_blank" rel="noopener noreferrer">
    {children}
  </Link> 
)

export default LinkLine;
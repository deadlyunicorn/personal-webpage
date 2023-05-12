'use client'

import { useEffect } from "react"


export default function Alert(){

  useEffect(()=>{
    alert("Right Click -> Print... -> Save as PDF, A4 size.")
  },[])

  return(
    <div>
    </div>
  )
}
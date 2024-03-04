"use client"
import {
  useContext,
} from "react"
import {
  Tag
} from "antd"
import ViewTitleContext from "@/component/viewTitleContext"


export default function HooksLayout({ children }) {

  const {title} = useContext(ViewTitleContext)
 
  return (
    <>
      <h1>Hook:<Tag color="success">{title}</Tag></h1>
      {children}
    </>
  )
}
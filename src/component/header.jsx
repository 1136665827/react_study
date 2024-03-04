"use client";

import ViewTitleContext from "@/component/viewTitleContext"
import { useContext } from "react";
export default function HeaderView({ children }) {

  const {title} = useContext(ViewTitleContext);
  return (
    <>
      Header: {title}
    </>
  )
}
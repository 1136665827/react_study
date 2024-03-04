import { useEffect, useState } from "react"

export default function useDateToStr(value) {
  const [dateStr, setDateStr] = useState("");
  useEffect(() => {
    if(value){
      setDateStr( value.toString() )
    }
  })
  return dateStr;
}
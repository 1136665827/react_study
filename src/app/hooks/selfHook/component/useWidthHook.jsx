import { useEffect, useState } from "react"

export default function useWidthHook() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth)
    function changeWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize",changeWidth)
    return () => {
      window.removeEventListener("resize",changeWidth)
    }
  })
  return width;
}
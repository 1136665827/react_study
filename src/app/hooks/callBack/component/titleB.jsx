"use client"

import { memo } from "react"
import { Button } from "antd"

export default memo(function TitleB(props) {
  const addTitleb = () => {
    console.log(props)
    props.changeTitleB(props.titleB + 1)
  }
  return (
    <>
      titleB:{props.titleB}
      <br />
      <Button onClick={addTitleb}>b+1</Button>
    </>
  )
})
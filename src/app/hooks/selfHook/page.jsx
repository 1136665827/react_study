"use client"
import {
  useEffect,
  useContext,
  useState
} from "react";
import {
  Typography,
  Button
} from 'antd';

import ViewTitleContext from "@/component/viewTitleContext";
import useWidthHook from "./component/useWidthHook";
import useDateToStr from "./component/useDateToStr";

const { Title, Text } = Typography;
export default function SelfHook() {

  const { changeTitle } = useContext(ViewTitleContext);
  const [date,setDate] = useState();
  const width = useWidthHook();
  const dateStr = useDateToStr(date);

  useEffect(() => {
    changeTitle("selfHook")
  }, [])


  return (
    <>
      <Typography>
        <Title>selfHook</Title>
        <Text>
          窗口宽度监听: {width}
        </Text>
        <br/>
        <Text>
          <Button onClick={()=>{setDate(new Date())}}>时间格式化: </Button>{dateStr}
        </Text>
        <br/>
        <Text>
          自定义Hook,内部必须使用的有原生hook,主要用来减少重复逻辑运算;必须在函数最外层调用,必须是react函数;
          自定义hook相对于普通js复用逻辑的抽离
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              const width = useWidthHook();

              ---------------------------------------
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
              </pre>`
            }}
          ></div>
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              const [date,setDate] = useState();
              const dateStr = useDateToStr(date);


              ---------------------------------

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
              </pre>`
            }}
          ></div>
        </Text>
      </Typography>
    </>
  )
}
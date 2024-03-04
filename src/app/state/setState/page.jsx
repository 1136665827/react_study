"use client"
import {
  useEffect, useState,
} from "react";
import {
  Typography,
  Button
} from 'antd';
const { Title, Text } = Typography;

import ViewTitleContext from "@/component/viewTitleContext";

export default function SetState() {

  const [num, setNum] = useState(1)

  const changeNum = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);
  }

  const changeNumList = () => {
    setNum(n => n + 1)
    setNum(n => n + 1)
    setNum(n => n + 1)
    setNum(n => n + 1)
  }


  return (
    <>
      <Typography>
        <Title>use</Title>
        <Text>
          num: {num}
          <Button onClick={changeNum}>普通赋值+4</Button>
          <Button onClick={changeNumList}>使用{`setState(n=>n+1)`}+4</Button>
        </Text>
        <br />
        <Text>
          setState多次调用,需要使用{`setState(n=>n+5)`},不然不生效.
          setState多次调用是一个队列
          自己实现状态队列:
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>

              export function getFinalState(baseState, queue) {
                let finalState = baseState;
              
                // TODO: 对队列做些什么...
                queue.forEach((item)=>{
                  if(typeof(item)=='function'){
                    finalState = item(finalState)
                  }else{
                    finalState = item
                  }
                })
              
                return finalState;
              }


              const [num, setNum] = useState(1)

              const changeNum = () => {
                setNum(num + 1);
                setNum(num + 1);
                setNum(num + 1);
                setNum(num + 1);
              }
            
              const changeNumList = () => {
                setNum(n => n + 1)
                setNum(n => n + 1)
                setNum(n => n + 1)
                setNum(n => n + 1)
              }
              </pre>`
            }}
          ></div>
        </Text>
      </Typography>
    </>
  )
}
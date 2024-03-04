"use client"
import {
  useEffect,
  useContext,
  useState,
  useCallback,
  useRef
} from "react";
import {
  Divider,
  Typography,
  Button,
  Space
} from 'antd';
const { Title, Text } = Typography;

import ViewTitleContext from "@/component/viewTitleContext";
import TitleB from "./component/titleB";

const str = `
const [titleA, setTitleA] = useState(0);
            const [titleB, setTitleB] = useState(1);
            const titleARef = useRef();


            useEffect(() => {
              changeTitle("callBack");
              titleARef.current = titleA;
            });

            const changeTitleB = useCallback((b) => {
              const a = titleARef.current;
              setTitleB(b);
            }, [titleB])
`

export default function CallBack() {

  const { changeTitle } = useContext(ViewTitleContext);
  const [titleA, setTitleA] = useState(0);
  const [titleB, setTitleB] = useState(1);
  const titleARef = useRef();


  useEffect(() => {
    changeTitle("callBack");
    titleARef.current = titleA;
  });

  const changeTitleB = useCallback((b) => {
    const a = titleARef.current;
    setTitleB(b);
  }, [titleB])

  return (
    <>
      titleA:{titleA}
      <br />
      <Button onClick={() => { setTitleA(titleA + 1) }}>a+1</Button>
      <br />
      <TitleB changeTitleB={changeTitleB} titleB={titleB}></TitleB>
      <br />
      <Typography>
        <Title>useCallBack</Title>
        <Text>
          设计初衷是为了减少子组件不必要的多次渲染,不是为了解决函数多次创建,会引起闭包,拿其他数据会拿上一次的,可以用useRef,他不守闭包影响,创建useRef,将他的current指向要用的数据;
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              const [titleA, setTitleA] = useState(0);
              const [titleB, setTitleB] = useState(1);
              const titleARef = useRef();


              useEffect(() => {
                changeTitle("callBack");
                titleARef.current = titleA;
              });

              const changeTitleB = useCallback((b) => {
                const a = titleARef.current;
                setTitleB(b);
              }, [titleB])
              </pre>`
            }}
          ></div>
        </Text>
      </Typography>
    </>
  )
}
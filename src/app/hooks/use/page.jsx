"use client"
import {
  useEffect,
  useContext,
  use
} from "react";
import {
  Typography,
} from 'antd';
const { Title, Text } = Typography;

import ViewTitleContext from "@/component/viewTitleContext";

export default function Use() {

  const { changeTitle } = useContext(ViewTitleContext)

  useEffect(() => {
    changeTitle("use")
  }, [])

  if (true) {
    const title = use(ViewTitleContext)
    console.log(title)
  }


  return (
    <>
      <Typography>
        <Title>use</Title>
        <Text>
          Use(特殊,可以在条件语句内使用)
          必须在函数外使用,调用它的必须是hook或者组件,不能写在一个方法里;
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              export default function Use() {
                const { changeTitle } = useContext(ViewTitleContext)
                if (true) {
                  const title = use(ViewTitleContext)
                  console.log(title)
                }
                return (...)
              }
              </pre>`
            }}
          ></div>
        </Text>
      </Typography>
    </>
  )
}
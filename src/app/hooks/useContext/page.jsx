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
    changeTitle("useContext")
  }, [])


  return (
    <>
      <Typography>
        <Title>useContext</Title>
        <Text>
          上下文控制,先createContext创建一个上下文hook,然后创建一个provide组件,使用createContext创建的context.provider放在这个组件的最外层,value写上暴露出去的方法和数据,然后把这个组件包在需要用的地方的最外层,里面的子组件调用的话就引入createContext创建context,使用它暴露出来的方法和数据;
          use这个hook也能达成同样效果,而且能在条件语句中使用;
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              import {
                createContext,
              } from "react";
              
              const ViewTitleContext = createContext();
              
              export default ViewTitleContext;
              </pre>`
            }}
          ></div>
        </Text>
        <Text code={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <pre>
              import ViewTitleContext from "./viewTitleContext"
              const ViewTitleContextProvider = ({ children }) => {
                const [title, setTitle] = useState("123");
                const changeTitle = useCallback((title) => {
                  setTitle(title)
                }, [])
                return (
                  <ViewTitleContext.Provider value={{ changeTitle, title }}>
                    {children}
                  </ViewTitleContext.Provider>
                )
              }
              export default ViewTitleContextProvider;
              </pre>`
            }}
          ></div>
        </Text>
      </Typography>
    </>
  )
}
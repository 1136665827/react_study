"use client"
import { useContext, useEffect } from "react";
import ViewTitleContext from "@/component/viewTitleContext";
import {
  Typography,
  Button
} from 'antd';
const { Title, Text } = Typography;

export default function Home() {

  const { changeTitle, title } = useContext(ViewTitleContext);

  useEffect(() => {
    changeTitle("首页(测试用)")
  }, [])

  return (
    <main>
      <ul>
        <li>渲染列表不能用forEach,因为他不返回,map会返回执行体return的东西</li>
        <li>事件传播: 除了onScroll所有事件都会传播,触发父级的事件,可以用e.stopPropagation()阻止传播,e.stopPropagation() 阻止触发绑定在外层标签上的事件处理函数。e.preventDefault() 阻止少数事件的默认浏览器行为,例如from表单。</li>
        <li>初次渲染调用根组件,之后会更新触发了渲染的函数组件,在 “严格模式” 下开发时，React 会调用每个组件的函数两次，这可以帮助发现由不纯函数引起的错误。</li>
        <li>优化应该放在后期,不应该过早优化</li>
        <li>优化相关的: 虚拟滚动</li>
        <li>一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。</li>
        <li>如果多次设置state的值,需要使用这种方式:{`setState(n=>n+5)`},set的时候传一个函数,必须纯函数,必须返回一个值</li>
        <li></li>
      </ul>
      <Text>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <pre>
            错误
            {
              () => {
                return [1, 2, 3].forEach(element => {
                  return (
                    element
                  )
                })
              }
            }
            正确
            {
              [1, 2, 3].map((item) => {
                return item
              })
            }
            </pre>
            `
          }}
        ></div>
      </Text>

    </main>
  );
}

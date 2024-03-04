"use client";
import React, { useState, useCallback } from 'react';
import {
  Layout,
  Flex,
  Button
} from 'antd';
import Link from 'next/link';
import "./globals.css";
import ViewTitleContextProvider from "@/component/viewTitleProvider";
import HeaderView from '@/component/header';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
  height: "64px"
};
const contentStyle = {
  textAlign: 'left',
  minHeight: 120,
  lineHeight: '40px',
  padding: 20,
  color: '#fff',
  backgroundColor: '#0958d9',
  height: 'calc(100vh - 128px)',
  overflow: "auto"
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '40px',
  color: '#fff',
  backgroundColor: '#1677ff',
  height: 'calc(100vh - 128px)'
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
  height: "64px",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
};

const routerList = [
  {
    title: "首页",
    href: "/",
    key: "/"
  },
  {
    title: "Hooks_use",
    href: "/hooks/use",
    key: "/hooks/use"
  },
  {
    title: "Hooks_useContext",
    href: "/hooks/useContext",
    key: "/hooks/useContext"
  },
  {
    title: "Hooks_callBack",
    href: "/hooks/callBack",
    key: "/hooks/callBack"
  },
  {
    title: "Hooks_selfHook",
    href: "/hooks/selfHook",
    key: "/hooks/selfHook"
  },
  {
    title: "多次设置state",
    href: "/state/setState",
    key: "/state/setState"
  },
]

export default function RootLayout({ children }) {

  const [isLogin, setIsLogin] = useState(true);

  const login = useCallback(() => {
    setIsLogin(true)
  }, [])

  const logout = useCallback(() => {
    setIsLogin(false)
  }, []);

  return (
    <html lang="en">
      <body>
        <ViewTitleContextProvider>
          {
            isLogin
              ?
              <Flex gap="middle" wrap="wrap">
                <Layout style={layoutStyle}>
                  <Header style={headerStyle}>
                    <HeaderView></HeaderView>
                    <Button onClick={logout}>退出</Button>
                  </Header>
                  <Layout>
                    <Sider width="25%" style={siderStyle}>
                      {
                        routerList.map((item) => (
                          <React.Fragment key={item.key}>
                            <Link href={item.href}>{item.title}</Link>
                            <br />
                          </React.Fragment>
                        ))
                      }
                    </Sider>
                    <Content style={contentStyle}>{children}</Content>
                  </Layout>
                  <Footer style={footerStyle}>Footer</Footer>
                </Layout>
              </Flex>
              :
              <Button type='primary' onClick={login}>登陆</Button>
          }
        </ViewTitleContextProvider>
      </body>
    </html>
  )
};
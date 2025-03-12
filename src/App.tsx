import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/calendar";
import {
  Avatar,
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Layout,
  List,
  Menu,
  Row,
  Space,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import LanguageSwitcher from "./components/languageSwitcher";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

function App() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const handleLanguageChange = (newLanguage: "en" | "zh") => {
    setLanguage(newLanguage);
    console.log("Language selected:", newLanguage);
  };

  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  }));
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#fff", padding: "0 20px" }}>
        <Row justify="space-between" align="middle">
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "auto",
                maxHeight: 20,
              }}
            />
          </Col>
          <Col>
            <LanguageSwitcher onChange={handleLanguageChange} />
          </Col>
        </Row>
      </Header>

      {/* Main Content */}
      <Content style={{ margin: "24px 16px 0" }}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={data}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default App;

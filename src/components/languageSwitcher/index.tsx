import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Flag from "react-world-flags";

type LanguageKey = "en" | "zh"; // Define the language keys

interface LanguageSwitcherProps {
  onChange: (lang: LanguageKey) => void; // Function to handle language change
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>("en");

  const handleLanguageChange = (key: LanguageKey) => {
    setSelectedLanguage(key); // Update the state with the selected language
    onChange(key); // Pass the selected language to the parent
  };

  const getLanguageButtonContent = () => {
    if (selectedLanguage === "en") {
      return (
        <>
          {/* <Flag code="GB" style={{ width: 20, height: 15, marginRight: 8 }} /> */}
          EN
        </>
      );
    } else {
      return (
        <>
          {/* <Flag code="CN" style={{ width: 20, height: 15, marginRight: 8 }} /> */}
          中文
        </>
      );
    }
  };

  const menu = (
    <Menu onClick={({ key }) => handleLanguageChange(key as LanguageKey)}>
      <Menu.Item key="en">
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <Flag code="GB" style={{ width: 20, height: 15, marginRight: 8 }} /> */}
          English
        </div>
      </Menu.Item>
      <Menu.Item key="zh">
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <Flag code="CN" style={{ width: 20, height: 15, marginRight: 8 }} /> */}
          中文
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {getLanguageButtonContent()} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitcher;

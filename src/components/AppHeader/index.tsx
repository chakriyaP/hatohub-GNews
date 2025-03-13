import React from "react";
import { Row, Col, Flex } from "antd";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import LanguageSwitcher from "../LanguageSwitcher";
import { useDarkMode } from "../../context/DarkModeContext";
import { StyledHeader, Switch } from "./style";
import { LanguageKey } from "../LanguageSwitcher/type";

const AppHeader: React.FC<{
  onLanguageChange: (lang: LanguageKey) => void;
}> = ({ onLanguageChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader $darkMode={darkMode}>
      <Row justify="space-between" align="middle">
        <Col>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            // style={{ maxHeight: 20 }}
          />
        </Col>
        <Col>
          <Flex justify="space-between" align="center" gap={10}>
            <Switch
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <LanguageSwitcher onChange={onLanguageChange} />
          </Flex>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default AppHeader;

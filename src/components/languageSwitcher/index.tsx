import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageKey, languages, LanguageSwitcherProps } from "./type";
import { Select } from "./style";
import { useDarkMode } from "../../context/DarkModeContext";

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onChange }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>(
    i18n.language as LanguageKey
  );
  const { darkMode } = useDarkMode();

  const handleLanguageChange = (key: LanguageKey) => {
    i18n.changeLanguage(key);
    setSelectedLanguage(key);
    onChange(key);
  };

  return (
    <Select
      $darkMode={darkMode}
      value={selectedLanguage}
      onChange={(value) => handleLanguageChange(value as LanguageKey)}
      style={{ width: 120 }}
    >
      {Object.entries(languages).map(([code, name]) => (
        <Select.Option
          key={code}
          value={code}
          style={{
            backgroundColor: selectedLanguage === code ? "#e6f7ff" : "white",
          }}
        >
          {name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;

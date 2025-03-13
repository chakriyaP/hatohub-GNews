import styled from "styled-components";
import * as Antd from "antd";

export const Select = styled(Antd.Select)<{ $darkMode: boolean }>`
  /* color: ${(props) => (props.$darkMode ? "#fff" : "#111")}; */
  > .ant-select-selector {
    background: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.2)" : "#fff"} !important;
    color: ${(props) => (props.$darkMode ? "#fff" : "#111")};
  }
  > .ant-select-arrow {
    color: ${(props) => (props.$darkMode ? "#fff" : "#111")} !important;
  }
  transition: 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  border: none;
`;

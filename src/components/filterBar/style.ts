import styled from "styled-components";
import {
  Form,
  Row,
  Divider as DividerAntd,
  Input,
  Button as ButtonAntd,
} from "antd";

export const StyledTitle = styled.h2<{ darkMode: boolean }>`
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#111")};
`;

export const StyledForm = styled(Form)`
  margin-top: 16px;
`;

export const Button = styled(ButtonAntd)<{
  $darkMode: boolean;
}>`
  background-color: ${(props) =>
    props.$darkMode && props.type !== "primary"
      ? "rgba(0, 0, 0, 0.3)"
      : "#fff"} !important;
  color: ${(props) =>
    props.$darkMode && props.type !== "primary" ? "#fff" : "#111"} !important;

  &.ant-btn-primary {
    background-color: #5d65d1 !important;
    color: #fff !important;
  }
`;

export const Wrapper = styled(Row)<{ $darkMode: boolean }>`
  * {
    color: ${(props) => (props.$darkMode ? "#fff" : "#111")} !important;
  }
  input::placeholder {
    color: ${(props) => (props.$darkMode ? "#fff" : "#111")} !important;
  }
  .ant-select-selector,
  .ant-picker {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
  }
  > span > .ant-input-search {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
  }
`;

export const InputSearch = styled(Input.Search)<{ $darkMode?: boolean }>`
  .ant-input {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
    color: ${(props) => (props.$darkMode ? "#fff" : "#000")} !important;
  }

  .ant-input-affix-wrapper {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
    border-radius: 6px !important;
  }

  .ant-input-search-button {
    background-color: ${(props) =>
      props.$darkMode ? "#333" : "#007bff"} !important;
    color: ${(props) => (props.$darkMode ? "#fff" : "#fff")} !important;
  }

  .ant-input-search-button {
    display: none !important;
  }
`;

export const Divider = styled(DividerAntd)`
  margin: 4px 0 20px;
`;

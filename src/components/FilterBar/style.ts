import styled from "styled-components";
import { Form, Row, Divider as DividerAntd } from "antd";

export const StyledTitle = styled.h2<{ darkMode: boolean }>`
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#111")};
`;

export const StyledForm = styled(Form)`
  margin-top: 16px;
`;

export const Wrapper = styled(Row)<{ $darkMode: boolean }>`
  margin-bottom: 10px;

  .ant-select-selector,
  .ant-picker {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
  }
`;

export const Divider = styled(DividerAntd)`
  margin: 4px 0 20px;
`;

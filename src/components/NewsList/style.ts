import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)<{ $darkMode: boolean }>`
  color: ${(props) => (props.$darkMode ? "#fff" : "#111")};
  background: ${(props) => (props.$darkMode ? "rgba(0, 0, 0, 0.2)" : "#fff")};
  transition: 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  border: none;
  p,
  span {
    color: ${(props) => (props.$darkMode ? "#fff" : "#111")};
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  cursor: pointer;
`;

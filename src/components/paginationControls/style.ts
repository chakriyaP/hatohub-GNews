import { Pagination } from "antd";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)<{ $darkMode: boolean }>`
  .ant-pagination-item {
    background-color: ${(props) =>
      props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
    border-color: ${(props) =>
      props.$darkMode ? "rgba(255, 255, 255, 0.2)" : "#d9d9d9"} !important;
    > a {
      color: ${(props) => (props.$darkMode ? "#fff" : "#111")} !important;
    }

    &:hover {
      background-color: ${(props) =>
        props.$darkMode ? "rgba(255, 255, 255, 0.1)" : "#f5f5f5"} !important;
    }

    &-active {
      background-color: #5d65d1 !important;
      border-color: #5d65d1 !important;
      > a {
        color: #fff !important;
      }
      &:hover {
        background-color: #5d65d1 !important;
      }
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    .ant-pagination-item-link {
      background-color: ${(props) =>
        props.$darkMode ? "rgba(0, 0, 0, 0.3)" : "#fff"} !important;
      color: ${(props) => (props.$darkMode ? "#fff" : "#111")} !important;
      border-color: ${(props) =>
        props.$darkMode ? "rgba(255, 255, 255, 0.2)" : "#d9d9d9"} !important;

      &:hover {
        background-color: ${(props) =>
          props.$darkMode ? "rgba(255, 255, 255, 0.1)" : "#f5f5f5"} !important;
      }
    }
  }
`;

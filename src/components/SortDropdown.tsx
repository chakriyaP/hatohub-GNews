// src/components/SortDropdown.tsx
import React, { useState } from "react";
import { Button, Dropdown, MenuProps, Flex } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface SortDropdownProps {
  sortBy: "publishedAt" | "relevance";
  setSortBy: (value: "publishedAt" | "relevance") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  const [sortOpen, setSortOpen] = useState(false);

  const sortByMenu: MenuProps = {
    items: [
      {
        key: "publishedAt",
        label: "Sort by publication date (most recent)",
        onClick: () => setSortBy("publishedAt"),
      },
      {
        key: "relevance",
        label: "Sort by best match to keywords",
        onClick: () => setSortBy("relevance"),
      },
    ],
  };

  return (
    <Dropdown menu={sortByMenu} onOpenChange={setSortOpen}>
      <Button style={{ width: "100%" }}>
        <Flex justify="space-between" align="center">
          <span>
            {sortBy === "publishedAt"
              ? "Sort by publication date"
              : "Sort by relevance"}
          </span>
          {sortOpen ? <UpOutlined /> : <DownOutlined />}
        </Flex>
      </Button>
    </Dropdown>
  );
};

export default SortDropdown;

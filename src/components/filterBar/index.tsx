import React, { useState } from "react";
import { Row, Col, Input, Select, DatePicker, Space, Form } from "antd";
import {
  FilterOutlined,
  UpOutlined,
  DownOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../context/DarkModeContext";
import { FilterBarProps } from "./type";
import {
  StyledForm,
  StyledTitle,
  Wrapper,
  Divider,
  InputSearch,
  Button,
} from "./style";

const { RangePicker } = DatePicker;

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  form,
  onFinish,
}) => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortedDescending, setIsSortedDescending] = useState(true);

  const handleSortToggle = () => {
    const newSortOrder = isSortedDescending ? "asc" : "desc";
    setIsSortedDescending(!isSortedDescending);
    form.setFieldsValue({ sortBy: newSortOrder });
    form.submit();
  };

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
    if (!isFilterVisible) form.resetFields();
  };

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col>
          <StyledTitle darkMode={darkMode}>{t("news")}</StyledTitle>
        </Col>
        <Col>
          <Space>
            <Button
              type={isFilterVisible ? "primary" : "default"}
              onClick={handleFilterToggle}
              aria-label="Filter"
              $darkMode={darkMode}
            >
              <FilterOutlined /> {t("filter")}
            </Button>
            <Button
              onClick={handleSortToggle}
              aria-label="Sort"
              $darkMode={darkMode}
            >
              {isSortedDescending ? t("sortBy") : t("sortByOldest")}
              {isSortedDescending ? <UpOutlined /> : <DownOutlined />}
            </Button>
          </Space>
        </Col>
      </Row>
      <StyledForm
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{
          searchQuery: "",
          category: null,
          dateRange: null,
          sortBy: "",
        }}
      >
        {isFilterVisible && (
          <Wrapper gutter={[16, 0]} $darkMode={darkMode}>
            <Col xs={24} md={8}>
              <Form.Item name="searchQuery">
                <InputSearch
                  $darkMode={darkMode}
                  prefix={<SearchOutlined />}
                  placeholder={t("search")}
                  allowClear
                  onSearch={form.submit}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item name="category">
                <Select
                  placeholder={t("selectCategory")}
                  options={categories.map((category) => ({
                    label: category,
                    value: category,
                  }))}
                  allowClear
                  onChange={(value) => {
                    form.setFieldsValue({ category: value || null });
                    form.submit();
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item name="dateRange">
                <RangePicker
                  showTime
                  style={{ width: "100%" }}
                  onChange={form.submit}
                  placeholder={[t("startDate"), t("endDate")]}
                />
              </Form.Item>
            </Col>
          </Wrapper>
        )}
        <Form.Item name="sortBy" hidden>
          <Input />
        </Form.Item>
      </StyledForm>
      <Divider />
    </>
  );
};

export default FilterBar;

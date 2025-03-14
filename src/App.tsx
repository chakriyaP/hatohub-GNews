import { useEffect, useState } from "react";
import { Layout, Form, ConfigProvider } from "antd";
import { useNewsFetch } from "./hooks/useNewsFetch";
import { useLayoutSettings } from "./hooks/useLayoutSettings";
import AppHeader from "./components/appHeader";
import FilterBar from "./components/filterBar";
import NewsCard from "./components/newsList";
import PaginationControls from "../src/components/paginationControls";
import { LanguageKey } from "./components/languageSwitcher/type";
import { NewsSearchParams } from "./types/news";
import { newsCategories } from "./constants/categories";

const { Content } = Layout;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [form] = Form.useForm();

  const { newsData, loading, fetchArticles } = useNewsFetch(language);
  const { layoutStyle, themeConfig } = useLayoutSettings();

  const handleFormSubmit = async (values: NewsSearchParams) => {
    fetchArticles(values);
    form.setFieldsValue(values);
  };

  useEffect(() => {
    const initialValues: NewsSearchParams = {
      searchQuery: "",
      category: null,
      dateRange: null,
      sortBy: "desc",
    };

    handleFormSubmit(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formValue = form.getFieldsValue() as NewsSearchParams;
    handleFormSubmit(formValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, form]);

  const currentData = newsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={layoutStyle} className="body">
        <AppHeader onLanguageChange={setLanguage}></AppHeader>
        <Content style={{ margin: "16px" }}>
          <FilterBar
            categories={newsCategories}
            form={form}
            onFinish={handleFormSubmit}
          />
          <NewsCard articles={currentData} loading={loading} />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <PaginationControls
              currentPage={currentPage}
              pageSize={pageSize}
              total={newsData.length}
              onPageChange={setCurrentPage}
            />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

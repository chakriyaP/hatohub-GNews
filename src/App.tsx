import { useEffect, useState } from "react";
import { Layout, Form, ConfigProvider } from "antd";
import { fetchNews, Article } from "./services/api";
import AppHeader from "./components/appHeader";
import FilterBar from "./components/filterBar";
import NewsCard from "./components/newsList";
import PaginationControls from "../src/components/PaginationControls";
import { filterEmptyValueFromObject } from "./utils/general";
import dayjs from "dayjs";
import { useDarkMode } from "./context/DarkModeContext";
import "./App.css";
import { LanguageKey } from "./components/languageSwitcher/type";

const { Content } = Layout;

type NewsSearchParams = {
  searchQuery: string;
  category: string | null;
  dateRange: [string, string] | null;
  sortBy: "asc" | "desc";
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [language, setLanguage] = useState<LanguageKey>("en");
  const [loading, setLoading] = useState(false);

  const { darkMode } = useDarkMode();

  const [form] = Form.useForm();

  const handleFormSubmit = async (values: NewsSearchParams) => {
    setLoading(true);
    const formValue = filterEmptyValueFromObject(values) as NewsSearchParams;

    const formattedFrom = formValue.dateRange?.[0]
      ? dayjs(formValue.dateRange[0]).format("YYYY-MM-DDTHH:mm:ss[Z]")
      : undefined;
    const formattedTo = formValue.dateRange?.[1]
      ? dayjs(formValue.dateRange[1]).format("YYYY-MM-DDTHH:mm:ss[Z]")
      : undefined;

    try {
      const news = await fetchNews({
        searchQuery: formValue?.searchQuery,
        category: formValue?.category,
        from: formattedFrom,
        to: formattedTo,
        sortBy: formValue.sortBy,
        languageKey: language,
      });

      const sortedNews = news.sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();
        return formValue.sortBy === "asc" ? dateA - dateB : dateB - dateA;
      });

      setNewsData(sortedNews);
      form.setFieldsValue(values);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  // Call the API on component mount
  useEffect(() => {
    const initialValues: NewsSearchParams = {
      searchQuery: "",
      category: null,
      dateRange: null,
      sortBy: "desc",
    };

    handleFormSubmit(initialValues);
  }, []);

  // Call the API on language change
  useEffect(() => {
    const formValue = form.getFieldsValue() as NewsSearchParams;
    handleFormSubmit(formValue);
  }, [language, form]);

  // Pagination logic
  const currentData = newsData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(93 101 209 / var(--tw-text-opacity))", // Your custom primary color
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          background: darkMode
            ? 'url("https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-3840x2160-1432.jpg")'
            : "#eee",
        }}
        className="body"
      >
        <AppHeader onLanguageChange={setLanguage}></AppHeader>
        <Content style={{ margin: "16px" }}>
          <FilterBar
            categories={[
              "general",
              "world",
              "business",
              "technology",
              "entertainment",
              "sports",
              "science",
              "health",
            ]}
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

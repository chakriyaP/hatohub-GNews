import { Row, Col, Skeleton, Tag, Empty } from "antd";
import dayjs from "dayjs";
import { useDarkMode } from "../../context/DarkModeContext";
import { StyledCard, Image } from "./style";
import { NewsListProps } from "./type";
import { Article } from "../../services/api";

const LoadingSkeleton: React.FC = () => (
  <Row gutter={[16, 16]}>
    {[...Array(6)].map((_, index) => (
      <Col xs={24} md={12} key={index}>
        <StyledCard $darkMode={true}>
          <Skeleton.Node active />
          <Skeleton active paragraph={{ rows: 4 }} />
        </StyledCard>
      </Col>
    ))}
  </Row>
);

const NewsCard: React.FC<{ article: Article }> = ({ article }) => {
  const { darkMode } = useDarkMode();

  return (
    <Col xs={24} md={12}>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <StyledCard
          $darkMode={darkMode}
          cover={<Image alt={article.title} src={article.image} />}
        >
          <p>{dayjs(article.publishedAt).format("MMM DD, YYYY hh:mm A")}</p>
          <StyledCard.Meta
            title={<span>{article.title}</span>}
            description={
              <>
                <p>{article.description}</p>
                <p style={{ textAlign: "end" }}>
                  <a
                    href={article.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Tag color="blue">{article.source.name}</Tag>
                  </a>
                </p>
              </>
            }
          />
        </StyledCard>
      </a>
    </Col>
  );
};

const NewsList: React.FC<NewsListProps> = ({ articles, loading }) => {
  if (loading) return <LoadingSkeleton />;

  if (!articles || articles.length === 0) {
    return (
      <Row justify="center" align="middle" style={{ height: "50vh" }}>
        <Col>
          <Empty description="No news available" />
        </Col>
      </Row>
    );
  }

  return (
    <Row gutter={[32, 32]}>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </Row>
  );
};

export default NewsList;

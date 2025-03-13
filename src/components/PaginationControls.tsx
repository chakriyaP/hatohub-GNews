import { Pagination } from "antd";

interface PaginationControlsProps {
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
}) => {
  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onPageChange}
      style={{ marginTop: "16px", textAlign: "center" }}
    />
  );
};

export default PaginationControls;

import { useDarkMode } from "../../context/DarkModeContext";
import { StyledPagination } from "./style";
import { PaginationControlsProps } from "./type";

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
}) => {
  const { darkMode } = useDarkMode();

  return (
    <StyledPagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onPageChange}
      style={{
        marginTop: "16px",
        textAlign: "center",
      }}
      $darkMode={darkMode}
    />
  );
};

export default PaginationControls;

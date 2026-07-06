import "./Pagination.css";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="pagination">

      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        ← Previous
      </button>

      <div className="pagination-pages">

        {pages.map((page) => (
          <button
            key={page}
            className={
              page === currentPage
                ? "pagination-page active"
                : "pagination-page"
            }
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}

      </div>

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next →
      </button>

    </nav>
  );
}
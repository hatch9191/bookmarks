import React from "react";

export function Pagination({
  paginate,
  currentPage,
  totalBookmarksCount,
  totalPages,
}) {
  return (
    <div>
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={totalBookmarksCount < 20}
      >
        Previous page
      </button>

      <h3>
        Page {currentPage} of {totalPages || 1}
      </h3>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={totalBookmarksCount < 20}
      >
        Next page
      </button>
    </div>
  );
}

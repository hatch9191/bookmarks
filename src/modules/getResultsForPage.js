export const getResultsForPage = (results, currentPage, bookmarksPerPage) => {
  const indexOfLastBookmark = currentPage * bookmarksPerPage;
  const indexOfFirstBookmark = indexOfLastBookmark - bookmarksPerPage;

  return results.slice(indexOfFirstBookmark, indexOfLastBookmark);
};

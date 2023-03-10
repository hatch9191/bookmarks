import { useEffect, useState } from "react";

import { config } from "../config";
import { getResultsForPage } from "../modules";

export function useBookmarks() {
  const { maxBookmarksPerPage } = config;

  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) ?? []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarksPerPage, setBookmarksPerPage] = useState(maxBookmarksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const addBookmark = (bookmark) =>
    setBookmarks((previousBookmarks) => {
      const id = previousBookmarks.length
        ? parseInt(previousBookmarks[previousBookmarks.length - 1].id) + 1
        : 1;

      return [
        ...previousBookmarks,
        {
          ...bookmark,
          id,
        },
      ];
    });

  const updateBookmark = (updatedBookmark) =>
    setBookmarks((previousBookmarks) => {
      const indexToUpdate = previousBookmarks.findIndex(
        (bookmark) => bookmark.id === updatedBookmark.id
      );

      const newBookmarks = [
        ...previousBookmarks.slice(0, indexToUpdate),
        updatedBookmark,
        ...previousBookmarks.slice(indexToUpdate + 1),
      ];

      return newBookmarks;
    });

  const deleteBookmark = (bookmarkId) =>
    setBookmarks((previousBookmarks) =>
      previousBookmarks.filter((bookmark) => bookmark.id !== bookmarkId)
    );

  const deleteAllBookmarks = () => setBookmarks([]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return {
    bookmarks: getResultsForPage(bookmarks, currentPage, maxBookmarksPerPage),
    addBookmark,
    updateBookmark,
    deleteBookmark,
    deleteAllBookmarks,
    setBookmarksPerPage,
    currentPage,
    totalPages: Math.ceil(bookmarks.length / bookmarksPerPage),
    totalBookmarksCount: bookmarks.length,
    paginate,
  };
}

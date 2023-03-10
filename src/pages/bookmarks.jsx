import React, { useState } from "react";

import { Header, BookmarksList, Pagination } from "../components";
import { useBookmarks } from "../hooks/useBookmarks";

export function Bookmarks() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const {
    bookmarks,
    addBookmark,
    updateBookmark,
    deleteBookmark,
    deleteAllBookmarks,
    currentPage,
    totalPages,
    totalBookmarksCount,
    paginate,
  } = useBookmarks();

  const onAddBookmark = (event) => {
    event.preventDefault();

    addBookmark({ title, url });
    setTitle("");
    setUrl("");
  };

  const onDeleteAllBookmarks = () => {
    if (window.confirm("Are you sure you want to delete all bookmarks?")) {
      deleteAllBookmarks();
    }
  };

  return (
    <div>
      <Header
        onAddBookmark={onAddBookmark}
        deleteAllBookmarks={onDeleteAllBookmarks}
        totalBookmarksCount={totalBookmarksCount}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
      />

      <BookmarksList
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        updateBookmark={updateBookmark}
      />

      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        totalBookmarksCount={totalBookmarksCount}
        totalPages={totalPages}
      />
    </div>
  );
}

import React from "react";

import { BookmarkForm } from "../../forms/BookmarkForm/BookmarkForm";

export function Header({
  onAddBookmark,
  deleteAllBookmarks,
  totalBookmarksCount,
  title,
  setTitle,
  url,
  setUrl,
}) {
  return (
    <div className="header-container">
      <h1>Bookmark Library</h1>

      <BookmarkForm
        onSubmit={onAddBookmark}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
      />

      <br />

      <button onClick={deleteAllBookmarks} disabled={!totalBookmarksCount}>
        Delete All Bookmarks
      </button>
    </div>
  );
}

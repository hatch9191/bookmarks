import React from "react";

import { BookmarkCard } from "../BookmarkCard/BookmarkCard";

export function BookmarksList({ bookmarks, updateBookmark, deleteBookmark }) {
  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          deleteBookmark={deleteBookmark}
          updateBookmark={updateBookmark}
        />
      ))}
    </ul>
  );
}

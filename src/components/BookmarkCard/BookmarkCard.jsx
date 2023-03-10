import React, { useState } from "react";

import { BookmarkEditable } from "./BookmarkEditable";
import { BookmarkReadable } from "./BookmarkReadable";

export function BookmarkCard({ bookmark, updateBookmark, deleteBookmark }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(bookmark.title);
  const [url, setUrl] = useState(bookmark.url);

  const onUpdateBookmark = (event) => {
    event.preventDefault();

    updateBookmark({ title, url, id: bookmark.id });

    setIsEditing(false);
  };

  const onDeleteBookmark = () => {
    if (window.confirm("Are you sure you want to delete this bookmark?")) {
      deleteBookmark(bookmark.id);
    }
  };

  return (
    <li>
      {isEditing ? (
        <BookmarkEditable
          title={title}
          url={url}
          setTitle={setTitle}
          setUrl={setUrl}
          onUpdateBookmark={onUpdateBookmark}
        />
      ) : (
        <BookmarkReadable title={title} url={url} />
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit Bookmark"}
      </button>

      <button onClick={onDeleteBookmark}>Delete Bookmark</button>
    </li>
  );
}

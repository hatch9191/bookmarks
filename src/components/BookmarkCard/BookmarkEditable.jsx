import React from "react";

import { BookmarkForm } from "../../forms/BookmarkForm/BookmarkForm";

export function BookmarkEditable({
  title,
  url,
  setTitle,
  setUrl,
  onUpdateBookmark,
}) {
  return (
    <div>
      <BookmarkForm
        onSubmit={onUpdateBookmark}
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
        isEdit={true}
      />
    </div>
  );
}

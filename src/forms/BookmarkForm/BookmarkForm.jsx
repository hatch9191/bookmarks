import React, { useState } from "react";

import { urlRegex } from "../../modules";

export function BookmarkForm({
  onSubmit,
  title,
  setTitle,
  url,
  setUrl,
  isEdit = false,
}) {
  const [isValidUrl, setIsValidUrl] = useState(false);

  const handleUrlInputChange = (event) => {
    const { value } = event.target;

    setUrl(value);
    setIsValidUrl(urlRegex.test(value));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            placeholder="Any Name..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label>
          Url{" "}
          <input
            type="text"
            name="url"
            placeholder="e.g. www.bookmarks.com"
            value={url}
            onChange={handleUrlInputChange}
            required
          />
        </label>

        <button type="submit" disabled={!isValidUrl}>
          {isEdit ? "Save" : "Add Bookmark"}
        </button>
      </form>

      {/* {!isValidUrl && <p style={{ color: "red" }}>Please enter a valid url</p>} */}
    </>
  );
}

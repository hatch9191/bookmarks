import React from "react";

export function BookmarkReadable({ title, url }) {
  return (
    <div>
      <h3>{title}</h3>

      <h3>{url}</h3>
    </div>
  );
}

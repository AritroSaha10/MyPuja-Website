import React from "react";

export default function Loading() {
  return (
    <div className="" style={{ margin: "auto", width: "50%" }}>
      <br />
      <br />
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p>Loading...</p>
    </div>
  );
}

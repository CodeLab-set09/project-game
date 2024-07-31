import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/SyncLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Spinner = () => {
  let [loading, setLoading] =useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        size={6}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

import * as React from "react";

const Loader = () => {
  return (
    <div className="spinner-border mt-50 h-100 d-flex align-items-center justify-content-center" role="status">
      <span className="sr-only">.</span>
    </div>
  );
};

export default Loader;

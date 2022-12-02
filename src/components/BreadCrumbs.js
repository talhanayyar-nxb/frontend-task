import React from "react";

const BreadCrumbs = () => {
  return (
    <nav
      className="border-bottom pb-2"
      style={{ "--bs-breadcrumb-divider": ">" }}
      aria-label="breadcrumb"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">Home {`>`}</li>
        <li class="breadcrumb-item">Administration {`>`}</li>
        <li class="breadcrumb-item text-primary" aria-current="page">
          Logger Search
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;

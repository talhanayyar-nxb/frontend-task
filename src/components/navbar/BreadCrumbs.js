import React from "react";
import { breadCrumbsListing } from "../../modules/Logger/LoggerUIHelpers";

const BreadCrumbs = () => {
  return (
    <nav
      data-testid="breadcrumbs-nav"
      className="border-bottom pb-2"
      style={{ "--bs-breadcrumb-divider": ">" }}
      aria-label="breadcrumb"
    >
      <ol
        data-testid="breadcrumbs-list-nav"
        className="breadcrumb"
        aria-labelledby="breadcrumbs-list-nav"
      >
        {breadCrumbsListing &&
          breadCrumbsListing.map((item, key) => (
            <li
            aria-labelledby="breadCrumbsListing"
              className={`${item.class}`}
            >
              {item.text}
            </li>
          ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;

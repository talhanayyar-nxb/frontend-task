import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../App.css";
import {
  handleFilterData,
  removeUnderScores,
  renderArrow,
  sortByAction,
  sortByActionDetails,
  sortByApplicationId,
  sortByApplicationType,
  sortByDate,
  sortByLogID,
} from "../../services/services";
import { LoggerFilter } from "./LoggerFilter";

const LoggerTable = ({ loggerListing }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filters, setFilters] = useState({});
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const itemsPerPage = 10;

  const handleFilters = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (loggerListing) {
      const filteredItems = handleFilterData(filters, loggerListing);
      setFilteredRows([...filteredItems]);
    }
  }, [loggerListing, JSON.stringify(filters)]);

  useEffect(() => {
    if (filteredRows?.length) {
      const endOffset = itemOffset + itemsPerPage;
      const currentLogs = filteredRows.slice(itemOffset, endOffset);
      setCurrentItems([...currentLogs]);
      setPageCount(Math.ceil(filteredRows.length / itemsPerPage));
    } else {
      setCurrentItems([]);
    }
  }, [filteredRows, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % loggerListing?.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <LoggerFilter
        filters={filters}
        setFilters={setFilters}
        handleFilters={handleFilters}
        loggerListing={loggerListing}
      />
      <div className="shadow">
        <table className="table mt-5">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByLogID(sorted, setSorted, currentItems, setCurrentItems)
                }
              >
                <span className="pl-8 flex gap-3 text-left">Log ID</span>
                {sorted.sorted === "id" ? renderArrow(sorted) : null}
              </th>

              <th
                scope="col"
                className="  md:p-5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByApplicationType(
                    sorted,
                    setSorted,
                    currentItems,
                    setCurrentItems
                  )
                }
              >
                <span className="flex gap-2">Application Type</span>
                {sorted.sorted === "appType" ? renderArrow(sorted) : null}
              </th>
              <th
                scope="col"
                className="md:p-5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByApplicationId(
                    sorted,
                    setSorted,
                    currentItems,
                    setCurrentItems
                  )
                }
              >
                <span className="flex gap-2">Application ID</span>
                {sorted.sorted === "appId" ? renderArrow(sorted) : null}
              </th>

              <th
                scope="col"
                className="px-3 py-3.5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByAction(sorted, setSorted, currentItems, setCurrentItems)
                }
              >
                <span className="flex gap-2">Action</span>
                {sorted.sorted === "actionType" ? renderArrow(sorted) : null}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByActionDetails(
                    sorted,
                    setSorted,
                    currentItems,
                    setCurrentItems
                  )
                }
              >
                <span className="flex gap-2 ">Action Details</span>
                {sorted.sorted === "actionDetails" ? renderArrow(sorted) : null}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-[12px] font-semibold text-gray-900"
                onClick={() =>
                  sortByDate(sorted, setSorted, currentItems, setCurrentItems)
                }
              >
                <span>Date:Time</span>
                {sorted.sorted === "date" ? renderArrow(sorted) : null}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentItems?.map((row) => (
              <tr>
                <td className="text-sm">{row?.logId}</td>

                <td className="text-sm">
                  {row?.applicationType
                    ? removeUnderScores(row?.applicationType)
                    : "-"}
                </td>

                <td className="ext-sm">
                  {row?.applicationId ? row?.applicationId : "-"}
                </td>

                <td className="text-sm">
                  {row?.actionType ? removeUnderScores(row?.actionType) : "-"}
                </td>

                <td className="text-sm">
                  {row?.actionDetails
                    ? removeUnderScores(row?.actionDetails)
                    : "-"}
                </td>

                <td className="text-sm">{row?.creationTimestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {currentItems && currentItems.length > 0 ? (
          !(currentItems.length < 10) && (
            <ReactPaginate
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName="pagination mt-3 pb-3"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          )
        ) : (
          <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default LoggerTable;

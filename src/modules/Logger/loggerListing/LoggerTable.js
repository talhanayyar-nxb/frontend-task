import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  removeUnderScores,
  renderArrow,
  sortByAction,
  sortByActionDetails,
  sortByApplicationId,
  sortByApplicationType,
  sortByDate,
  sortByLogID,
} from "../../../services/services";

export const LoggerTable = ({
  currentItems,
  setCurrentItems,
  pageCount,
  handlePageClick,
  itemOffset,
  setItemOffset,
}) => {
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  return (
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
        pageCount > 1 ? (
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
        ) : null
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

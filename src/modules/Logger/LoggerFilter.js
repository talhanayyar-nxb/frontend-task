import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import {
  dropdownForActionType,
  dropdownForApplicationType,
  removeUnderScores,
} from "../../services/services";

export function LoggerFilter({ loggerListing, handleFilters, setFilters }) {
  const [employeeName, setEmployeeName] = useState("");
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [actionTypeOptions, setActionTypeOptions] = useState([]);
  const [applicationTypeOptions, setApplicationTypeOptions] = useState([]);

  useEffect(() => {
    dropdownForActionType(loggerListing, setActionTypeOptions);
    dropdownForApplicationType(loggerListing, setApplicationTypeOptions);
  }, [loggerListing]);

  const applyFilter = () => {
    if (
      !employeeName &&
      !applicationId &&
      !applicationType &&
      !actionType &&
      !fromDate &&
      !toDate
    ) {
      setFilters({});
      return;
    }
    handleFilters({
      ...(employeeName && { employeeName }),
      ...(applicationId && { applicationId }),
      ...(applicationType && { applicationType }),
      ...(actionType && { actionType }),
      ...(fromDate && { fromDate }),
      ...(toDate && { toDate }),
    });
  };

  const resetFilter = () => {
    setEmployeeName('');
    setActionType('');
    setApplicationType('');
    setFromDate('');
    setToDate('');
    setApplicationId('');
    return;
  };

  return (
    <>
      <div className="d-flex align-items-end mt-4">
        <div className="w-100 me-2">
          <small className="form-text text-muted">Employee Name</small>
          <input
            type="text"
            className="form-control input-margin-none"
            name="searchText"
            placeholder="eg. Admin User"
            value={employeeName}
            autoComplete="off"
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-2">
          <small className="form-text text-muted">Action Type</small>
          <select
            className="form-select"
            onChange={(e) => {
              setActionType(e.target.value);
            }}
            value={actionType}
          >
            <option value=""></option>
            {actionTypeOptions &&
              actionTypeOptions.map((item) => (
                <option value={item}>{removeUnderScores(item)}</option>
              ))}
          </select>
        </div>
        <div className="w-100 me-2">
          <small className="form-text text-muted">Application Type</small>
          <select
            id="appType"
            name="appType"
            className="form-select"
            value={applicationType}
            onChange={(e) => {
              setApplicationType(e.target.value);
            }}
          >
            {applicationTypeOptions &&
              applicationTypeOptions.map((item) => (
                <option value={item}>{removeUnderScores(item)}</option>
              ))}
          </select>
        </div>
        <div className="w-100 me-2">
          <small className="form-text text-muted">From Date</small>
          <input
            type="date"
            className="form-control input-margin-none"
            name="searchText"
            value={fromDate}
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-2">
          <small className="form-text text-muted">To Date</small>
          <input
            type="date"
            className="form-control input-margin-none"
            name="searchText"
            value={toDate}
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => {
              setToDate(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-2">
          <small className="form-text text-muted">Application ID</small>
          <input
            type="text"
            className="form-control input-margin-none"
            name="searchText"
            value={applicationId}
            placeholder="eg. 375709440378514"
            autoComplete="off"
            onChange={(e) => {
              setApplicationId(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-between align-items-end me-2">
          <div className="w-80 me-2">
            <button
              type="submit"
              onClick={() => applyFilter()}
              className="btn btn-primary btn-elevate d-block w-80"
            >
              Search
            </button>
          </div>
          <div className="w-20 me-2">
            <button
              type="submit"
              onClick={() => resetFilter()}
              className="btn btn-danger btn-elevate d-block w-20"
            >
              <FaTimesCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

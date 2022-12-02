import React, { useEffect, useState } from "react";
import {
  dropdownForActionType,
  dropdownForApplicationType,
  removeUnderScores,
} from "../../services/services";

export function LoggerFilter({
  loggerListingFiltered,
  handleFilters,
  setFilters,
}) {
  const [employeeName, setEmployeeName] = useState("");
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [actionTypeOptions, setActionTypeOptions] = useState([]);
  const [applicationTypeOptions, setApplicationTypeOptions] = useState([]);

  useEffect(() => {
    dropdownForActionType(loggerListingFiltered, setActionTypeOptions);
    dropdownForApplicationType(
      loggerListingFiltered,
      setApplicationTypeOptions
    );
  }, [loggerListingFiltered]);

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

  return (
    <>
      <div className="d-flex align-items-end mt-4">
        <div className="w-100 me-3">
          <small className="form-text text-muted">Employee Name</small>
          <input
            type="text"
            className="form-control input-margin-none"
            name="searchText"
            placeholder="eg. Admin User"
            autoComplete="off"
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-3">
          <small className="form-text text-muted">Action Type</small>
          <select
            className="form-select"
            onChange={(e) => {
              setActionType(e.target.value);
            }}
          >
            <option value=""></option>
            {actionTypeOptions &&
              actionTypeOptions.map((item) => (
                <option value={item}>{removeUnderScores(item)}</option>
              ))}
          </select>
        </div>
        <div className="w-100 me-3">
          <small className="form-text text-muted">Application Type</small>
          <select
            id="appType"
            name="appType"
            className="form-select"
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
        <div className="w-100 me-3">
          <small className="form-text text-muted">From Date</small>
          <input
            type="date"
            className="form-control input-margin-none"
            name="searchText"
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => {
              setFromDate(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-3">
          <small className="form-text text-muted">To Date</small>
          <input
            type="date"
            className="form-control input-margin-none"
            name="searchText"
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => {
              setToDate(e.target.value);
            }}
          />
        </div>
        <div className="w-100 me-3">
          <small className="form-text text-muted">Application ID</small>
          <input
            type="text"
            className="form-control input-margin-none"
            name="searchText"
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => {
              setApplicationId(e.target.value);
            }}
          />
        </div>
        <div className="w-100">
          <button
            type="submit"
            onClick={() => applyFilter()}
            className="btn btn-primary btn-elevate d-block w-100"
          >
            Search Logger
          </button>
        </div>
      </div>
    </>
  );
}

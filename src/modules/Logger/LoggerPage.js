import React, { useEffect, useState } from "react";
import "../../App.css";
import { handleDataFiltered } from "../../services/services";
import { LoggerFilter } from "./loggerListing/LoggerFilter";
import { LoggerTable } from "./loggerListing/LoggerTable";

const LoggerPage = ({ loggerListing }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filters, setFilters] = useState({});
  const itemsPerPage = 10;

  // handle all the filters that are added by the user
  const handleFilters = (filters) => {
    setFilters(filters);
  };

  // invoke when user click to request another page
  const handlePageClick = (event) => {
    // sets the new offset for each page
    const newOffset = (event.selected * itemsPerPage) % loggerListing?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (loggerListing) {
      // handles the data that has to be filtered
      const filteredItems = handleDataFiltered(filters, loggerListing);
      setFilteredRows([...filteredItems]);
    }
  }, [loggerListing, JSON.stringify(filters)]);

  useEffect(() => {
    if (filteredRows?.length) {
      if(itemOffset > filteredRows?.length){
        let offSet = itemOffset;
        // keeps on decreasing the offset by 10 if the current offset is bigger then the listing records
        while(offSet >= filteredRows?.length){
          offSet = offSet - 10;
        }
        setItemOffset(offSet);
      }
      const endOffset = itemOffset + itemsPerPage;
      const currentLogs = filteredRows.slice(itemOffset, endOffset);
      setCurrentItems([...currentLogs]);
      setPageCount(Math.ceil(filteredRows.length / itemsPerPage));
    } else {
      setCurrentItems([]);
    }
  }, [filteredRows, itemOffset]);

  return (
    <>
      <LoggerFilter
        filters={filters}
        setFilters={setFilters}
        handleFilters={handleFilters}
        loggerListing={loggerListing}
      />
      <LoggerTable
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default LoggerPage;

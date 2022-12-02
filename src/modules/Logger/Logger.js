import React, { useEffect, useState } from "react";
import { fetchLoggersListing } from "./actions/loggerActions";
import LoggerTable from "./LoggerTable";

const Logger = () => {
  const [loggerListing, setLoggerListing] = useState(null);

  const getLoggerListing = async () => {
    const res = await fetchLoggersListing();
    setLoggerListing(res?.data?.result?.auditLog);
  };

  useEffect(() => {
    getLoggerListing();
  }, []);

  return (
    <div data-testid="logger-1" className="">
      <LoggerTable rawData={loggerListing} />
    </div>
  );
};

export default Logger;

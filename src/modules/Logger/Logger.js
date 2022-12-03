import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { fetchLoggersListing } from "./actions/loggerActions";
import LoggerTable from "./LoggerTable";

const Logger = () => {
  const [loggerListing, setLoggerListing] = useState(null);
  const { addToast } = useToasts();

  const getLoggerListing = async () => {
    fetchLoggersListing().then((response) => {
      if (response?.status === 200) {
        addToast("Logs Fetched successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
        setLoggerListing(response?.data?.result?.auditLog);
      } else {
        addToast("There was an issue. Please try again later", {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
      }
    });
  };

  useEffect(() => {
    getLoggerListing();
  }, []);

  return (
    <div data-testid="logger-1" className="">
      <LoggerTable loggerListing={loggerListing} />
    </div>
  );
};

export default Logger;

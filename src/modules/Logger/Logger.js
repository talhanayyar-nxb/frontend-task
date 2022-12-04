import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { fetchLoggersListing } from "./actions/loggerActions";
import LoggerPage from "./LoggerPage";

const Logger = () => {
  // contains the full records fetched by the API
  const [loggerListing, setLoggerListing] = useState(null);

  const { addToast } = useToasts();

  // fetch the records from the API
  const getLoggerListing = async () => {
    fetchLoggersListing().then((response) => {
      if (response?.status === 200) {
        // success toast in case of logs fetched
        addToast("Logs Fetched successfully", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
        setLoggerListing(response?.data?.result?.auditLog);
      } else {
        // error toast in case of API error or bad request
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
    <div data-testid="logger-listing" className="">
      <LoggerPage loggerListing={loggerListing} />
    </div>
  );
};

export default Logger;

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function removeUnderScores(str) {
  if (str) {
    var i,
      frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
  }
}

export const sortByLogID = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "id", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];
  sortedItems.sort((logA, logB) => {
    if (sorted.reversed) {
      return logA.logId - logB.logId;
    }
    return logB.logId - logA.logId;
  });
  setCurrentItems(sortedItems);
};

export const sortByApplicationType = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "appType", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];
  sortedItems.sort((logA, logB) => {
    const appTypeA = `${logA.applicationType}`;
    const appTypeB = `${logB.applicationType}`;
    if (sorted.reversed) {
      return appTypeB.localeCompare(appTypeA);
    }
    return appTypeA.localeCompare(appTypeB);
  });
  setCurrentItems(sortedItems);
};

export const sortByAction = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "actionType", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];
  sortedItems.sort((logA, logB) => {
    const actionTypeA = `${logA.actionType}`;
    const actionTypeB = `${logB.actionType}`;
    if (sorted.reversed) {
      return actionTypeB.localeCompare(actionTypeA);
    }
    return actionTypeA.localeCompare(actionTypeB);
  });
  setCurrentItems(sortedItems);
};

export const sortByActionDetails = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "actionDetails", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];
  sortedItems.sort((logA, logB) => {
    const actionTypeA = `${logA.actionType}`;
    const actionTypeB = `${logB.actionType}`;
    if (sorted.reversed) {
      return actionTypeB.localeCompare(actionTypeA);
    }
    return actionTypeA.localeCompare(actionTypeB);
  });
  setCurrentItems(sortedItems);
};

export const sortByApplicationId = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "appId", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];
  sortedItems.sort((logA, logB) => {
    if (sorted.reversed) {
      return logA.applicationId - logB.applicationId;
    }
    return logB.applicationId - logA.applicationId;
  });
  setCurrentItems(sortedItems);
};

export const sortByDate = (
  sorted,
  setSorted,
  currentItems,
  setCurrentItems
) => {
  setSorted({ sorted: "date", reversed: !sorted.reversed });
  const sortedItems = [...currentItems];

  sortedItems.sort((logA, logB) => {
    const dateA = `${logA.creationTimestamp}`.split(" ")[0];
    const dateB = `${logB.creationTimestamp}`.split(" ")[0];
    if (sorted.reversed) {
      return new Date(dateA).getTime - new Date(dateB).getTime;
    }
    return new Date(dateB).getTime - new Date(dateA).getTime;
  });
  setCurrentItems(sortedItems);
};

export const dropdownForActionType = (
  loggerListingFiltered,
  setActionTypeOptions
) => {
  const optionsArray = [];
  for (let index = 0; index < loggerListingFiltered?.length; index++) {
    if (loggerListingFiltered[index].actionType !== "") {
      optionsArray.push(loggerListingFiltered[index].actionType);
    }
  }
  const uniqueListingDropdownOptions = [...new Set(optionsArray)];
  setActionTypeOptions(uniqueListingDropdownOptions);
};

export const dropdownForApplicationType = (
  loggerListingFiltered,
  setApplicationTypeOptions
) => {
  const optionsArray = [];
  for (let index = 0; index < loggerListingFiltered?.length; index++) {
    if (loggerListingFiltered[index].applicationType !== "") {
      optionsArray.push(loggerListingFiltered[index].applicationType);
    }
  }
  const uniqueListingDropdownOptions = [...new Set(optionsArray)];
  setApplicationTypeOptions(uniqueListingDropdownOptions);
};

export const renderArrow = (sorted) => {
  if (sorted.reversed) {
    return <FaArrowUp />;
  }
  return <FaArrowDown />;
};

export const handleDataFiltered = (filters = {}, data) => {
  if (Object.keys(filters)) {
    return data?.filter((item) => {
      return Object.keys(filters).every((key) => {
        const value = item[key];
        const searchValue = filters[key];

        if (value && value == searchValue) {
          return true;
        }

        if (key === "fromDate") {
          const date = `${item.creationTimestamp}`.split(" ")[0];
          if (new Date(searchValue).getTime() - new Date(date).getTime() < 0) {
            return true;
          }
        }

        if (key === "toDate") {
          const date = `${item.creationTimestamp}`.split(" ")[0];
          if (new Date(searchValue).getTime() - new Date(date).getTime() > 0) {
            return true;
          }
        }

        return false;
      });
    });
  }
  return data;
};

import { useEffect } from "react";

export default function DoSearch(inputQuery, tabledata, readyData, setReadyData) {
  readyData = tabledata;
  
  if (inputQuery !== "")
    setReadyData(
      readyData.filter(
        (row) =>
          row.name.toLowerCase() === inputQuery.toLowerCase() ||
          row.city.toLowerCase() === inputQuery.toLowerCase() ||
          row.abbreviation.toLowerCase() === inputQuery.toLowerCase() ||
          row.conference.toLowerCase() === inputQuery.toLowerCase() ||
          row.division.toLowerCase() === inputQuery.toLowerCase()
      )
    );
  else setReadyData(tabledata);
}

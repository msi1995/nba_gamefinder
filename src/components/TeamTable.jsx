import Table from "react-bootstrap/Table";
import doSearch from "../hooks/DoSearch";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./teamtable.css";
import "./search.css"
export default function TeamTable({ tabledata }) {

  const [inputQuery, setInputQuery] = useState("");
  const [readyData, setReadyData] = useState(tabledata);
  const [teamSorted, setTeamSorted] = useState(true);
  const [citySorted, setCitySorted] = useState(true);
  const [abbreviationSorted, setAbbreviationSorted] = useState(true);
  const [conferenceSorted, setConferenceSorted] = useState(true);
  const [divisionSorted, setDivisionSorted] = useState(true);

  useEffect(() => {
    setReadyData(tabledata);
  }, [tabledata]);

  // Sorting functions for table. I tried to use string interpolation to pass an argument to this function, so I could do something like
  // a.passedArgument to only have one function, but accessing children with string interpolation doesn't seem to work out of the box.
  // I could do this a better way than repeating the functions if I spent more time, most likely.
  function TeamSort() {
    tabledata = readyData
    setTeamSorted(!teamSorted);
     if (teamSorted == true)
         tabledata.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name)) ? -1 : 0)
     else 
         tabledata.reverse()
  }

  function CitySort() {
    tabledata = readyData
    setCitySorted(!citySorted);
     if (citySorted == true)
         tabledata.sort((a,b) => (a.city > b.city) ? 1 : ((b.city > a.city)) ? -1 : 0)
     else 
         tabledata.reverse()
  }

  function AbbreviationSort() {
    tabledata = readyData
    setAbbreviationSorted(!abbreviationSorted);
     if (abbreviationSorted == true)
         tabledata.sort((a,b) => (a.abbreviation > b.abbreviation) ? 1 : ((b.abbreviation > a.abbreviation)) ? -1 : 0)
     else 
         tabledata.reverse()
  }

  function ConferenceSort() {
    tabledata = readyData
    setConferenceSorted(!conferenceSorted);
     if (conferenceSorted == true)
         tabledata.sort((a,b) => (a.conference > b.conference) ? 1 : ((b.conference > a.conference)) ? -1 : 0)
     else 
         tabledata.reverse()
  }

  function DivisionSort() {
    tabledata = readyData
    setDivisionSorted(!divisionSorted);
     if (divisionSorted == true)
         tabledata.sort((a,b) => (a.division > b.division) ? 1 : ((b.division > a.division)) ? -1 : 0)
     else 
         tabledata.reverse()
  }



  return (
    <div>
      <form
        className="form-c"
        onSubmit={(event) => {
          event.preventDefault();
          doSearch(inputQuery, tabledata, readyData, setReadyData);
        }}
      >
        <input
          className="searchbox" placeholder="Search team, city, etc." onChange={(e) => setInputQuery(e.target.value)}
        />
        <AiOutlineSearch size={26} className="search-img" alt="Search" />
      </form>

      <div className="team-table">
        <Table className="table" hover>
          <thead>
            <tr className="table-ctg">
              <th onClick={TeamSort}>Team Name</th>
              <th onClick={CitySort}>City</th>
              <th onClick={AbbreviationSort}>Abbreviation</th>
              <th onClick={ConferenceSort}>Conference</th>
              <th onClick={DivisionSort}>Division</th>
            </tr>
          </thead>
          <tbody>
            {
              readyData.map((row) => (
                  //make a handle click that adds a class to it for highlighting, and opens a modal somehow
                  // pass the team name to the modal, use a hook inside the modal to do second api call
                  // to the games endpoint and then filter it by the team name
                <tr onClick={() => console.log(row.name)}className="table-inf">
                  <td>{row.name}</td>
                  <td>{row.city}</td>
                  <td>{row.abbreviation}</td>
                  <td>{row.conference}</td>
                  <td>{row.division}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

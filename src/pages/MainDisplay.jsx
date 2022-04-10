import { useState, useEffect } from 'react'
import FetchTeams from "../hooks/FetchTeams";
import TeamTable from '../components/TeamTable';

export default function Search(){

  const [inputQuery, setInputQuery] = useState("");


  const teamData = FetchTeams()

    return(
      <div>
        <h1>NBA TEAMS</h1>
        {/* <Searchbar/> */}
        <TeamTable tabledata={teamData}/>
      </div>
    )
}
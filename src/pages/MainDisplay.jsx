import { useState, useEffect } from 'react'
import FetchTeams from "../hooks/FetchTeams";
import FetchGames from "../hooks/FetchGames";
import TeamTable from '../components/TeamTable';
import SlidePanel from '../components/SlidingPanel';

export default function Search(){

  const [openPanel, setOpenPanel] = useState(false);
  const [panelTeam, setPanelTeam] = useState([])
  const teamData = FetchTeams()
  const gameData = FetchGames()

    return(
      <div>
        <h1>NBA TEAMS</h1>
        <TeamTable tabledata={teamData} setOpenPanel={setOpenPanel} setPanelTeam={setPanelTeam}/>
        <SlidePanel gamedata={gameData} isOpen={openPanel} team={panelTeam} />
      </div>
    )
}
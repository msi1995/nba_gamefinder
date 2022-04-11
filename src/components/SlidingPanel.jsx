import SlidingPanel from "react-sliding-side-panel";
import { useState, useEffect } from "react";
import Spinner from './Spinner.js';
import "./slidingpanel.css";
import FetchGames from "../hooks/FetchGames";

export default function SlidePanel({ isOpen, team, setActive }) {
  //team[0] is id, [1] is name, [2] is full name.

  const [gameData, loading] = FetchGames(team[0]);

  const [openPanel, setOpenPanel] = useState();
  useEffect(() => {
    setOpenPanel(isOpen);
  }, [team]);

  return (
    <div className="panel-container">
      {openPanel && <div className="dark-overlay"></div>}
      <SlidingPanel type={"right"} isOpen={openPanel} size={30}>
        {loading ? (
         <Spinner/>
        ) : (
          <div>
            <div className="panel-header">
              <h1 className="panel-title">{team[2]}</h1>
              <button
                className="closeBtn"
                onClick={() => {
                  setOpenPanel(false);
                  setActive(0);
                }}
              >
                ✖
              </button>
            </div>
            <div className="panel-info">
              <div className="panel-box">
                <span>Team Full Name</span>
                <span>{team[2]}</span>
              </div>
              <div className="panel-box">
                <span>Total Games in 2021</span>
                <span id="api-check">{Object.keys(gameData).length}</span>
              </div>
              <div className="panel-box">
                <span className="panel-subtitle">
                  <b>Random Game Details:</b>
                </span>
                <span></span>
              </div>
              <div className="panel-box-sub">
                <span>Date</span>
                <span>{gameData[0]?.date.substring(0,10)}</span>
              </div>
              <div className="panel-box-sub">
                <span>Home Team</span>
                <span>{gameData[0]?.home_team.name}</span>
              </div>
              <div className="panel-box-sub">
                <span>Home Team Score</span>
                <span>{gameData[0]?.home_team_score}</span>
              </div>
              <div className="panel-box-sub">
                <span>Visitor Team</span>
                <span>{gameData[0]?.visitor_team.name}</span>
              </div>
              <div className="panel-box-sub">
                <span>Visitor Team Score</span>
                <span>{gameData[0]?.visitor_team_score}</span>
              </div>
            </div>
          </div>
        )}
      </SlidingPanel>
    </div>
  );
}

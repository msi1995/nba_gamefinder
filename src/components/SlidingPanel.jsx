import SlidingPanel from "react-sliding-side-panel";
import { useState, useEffect } from "react";
import "./slidingpanel.css";

export default function SlidePanel({gamedata, isOpen, team, active, setActive,}) {
  //team[0] is id, [1] is name, [2] is full name.
  const [openPanel, setOpenPanel] = useState();
  console.log("gamedata in panel", gamedata)
  useEffect(() => {
    setOpenPanel(isOpen);
  }, [team]);

  return (
    <div className="panel-container">
      {openPanel && <div className="dark-overlay"></div>}
      <SlidingPanel type={"right"} isOpen={openPanel} size={30}>
        <div className="panel-header">
          <h1 className="panel-title">{team[2]}</h1>
          <button
            className="closeBtn"
            onClick={() => {
              setOpenPanel(false);
              setActive(0);
            }}
          >✖</button>
        </div>
        <div className="panel-info">
          <div className="panel-box">
            <span>Team Full Name</span>
            <span>{team[2]}</span>
          </div>
          <div className="panel-box">
            <span>Total Games in 2021</span>
            <span>a number</span>
          </div>
          <div className="panel-box">
            <span className="panel-subtitle">
              <b>Random Game Details:</b>
            </span>
            <span></span>
          </div>
          <div className="panel-box-sub">
            <span>Date</span>
            <span>2021-02-04</span>
          </div>
          <div className="panel-box-sub">
            <span>Home Team</span>
            <span>hawks maybe?</span>
          </div>
          <div className="panel-box-sub">
            <span>Home Team Score</span>
            <span>99</span>
          </div>
          <div className="panel-box-sub">
            <span>Visitor Team</span>
            <span>some team</span>
          </div>
          <div className="panel-box-sub">
            <span>Visitor Team Score</span>
            <span>88</span>
          </div>
        </div>
      </SlidingPanel>
    </div>
  );
}

import SlidingPanel from "react-sliding-side-panel";
import { useState, useEffect } from "react";
import './slidingpanel.css'

export default function SlidePanel({ gamedata, isOpen, team}) {

  const [openPanel, setOpenPanel] = useState();
  useEffect(() => {
    setOpenPanel(isOpen);
  }, [isOpen]);

  console.log("team: ", team)

  return (
    <div className="panel-container">
      <SlidingPanel className="panel" type={"right"} isOpen={openPanel} size={30}>
      <div className="panel-header">
                <span>{team[2]}</span>
                <button className="closeBtn" onClick={() => setOpenPanel(false)}>✖</button>
            </div>
        <div className="panel-info">
            <div className="panel-titles">
            <span>Team Full Name:</span>
            <span>Team Games in 2021: </span>
            <span>Random Game Details:</span>
            </div>
            <div className="panel-desc">
            <span>desc</span>
            <span>desc2 </span>
            <span>desc3</span>
            </div>
        </div>
      </SlidingPanel>
    </div>
  );
}

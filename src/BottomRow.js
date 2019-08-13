import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(7);
  const [toGo, setToGo] = useState(3);
  const [ballOn, setBallOn] = useState(21);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={() => setDown(down + 1)} className="awayButtons__fieldGoal">Next Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <button onClick={() => setToGo(toGo + 1)} className="awayButtons__fieldGoal">Next To Go</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button onClick={() => setBallOn(ballOn + 1)} className="awayButtons__fieldGoal">Next Ball</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={() => setQuarter(quarter + 1)} className="awayButtons__fieldGoal">Next Quarter</button>
      </div>

    </div>
    
  );
};

export default BottomRow;

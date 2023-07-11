import BaseballStats from "./BaseballStats";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamStandings from "./Frontend/TeamStandings";
import PlayerInfo from "./Frontend/PlayerInfo";
import GameSchedule from "./Frontend/GameSchedule";
import Dashboard from "./Frontend/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/BaseballStats" element={<BaseballStats />} />
          <Route path="TeamStandings" element={<TeamStandings />} />
          <Route path="/PlayerInfo" element={<PlayerInfo />} />
          <Route path="GameSchedule" element={<GameSchedule />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

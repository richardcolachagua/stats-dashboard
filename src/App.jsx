import BaseballStats from "./BaseballStats";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TeamStandings from "./Frontend/TeamStandings";
import PlayerStats from "./Frontend/PlayerStats";
import GameSchedule from "./Frontend/GameSchedule";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/BaseballStats" element={<BaseballStats />} />
          <Route path="TeamStandings" element={<TeamStandings />} />
          <Route path="/PlayerStats" element={<PlayerStats />} />
          <Route path="GameSchedule" element={<GameSchedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
